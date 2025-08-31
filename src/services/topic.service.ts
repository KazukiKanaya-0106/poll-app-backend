import { toZonedTime, fromZonedTime } from "date-fns-tz";
import { Topic, Vote } from "../generated/zod";
import {
  countVotesByTopic,
  createTopic,
  createVote,
  findTopicByDate,
  findTopicById,
  updateTopic,
} from "../repositories/topic.repository";
import { CreateVote, Result, TopicDraft } from "../schemas/topic.schema";

export const setTopic = async (data: TopicDraft): Promise<Topic> => {
  return await createTopic({
    title: data.title,
    question: data.question,
    optionA: data.optionA,
    optionB: data.optionB,
  });
};

export const getTodayTopic = async (): Promise<Topic> => {
  const today: Date = jstTodayDateOnly();

  const topic: Topic | null = await findTopicByDate(today);
  if (!topic) throw new Error("Topic not found");
  if (topic.closed) throw new Error("Topic is closed");

  return topic;
};

export const voteOnTopic = async (data: CreateVote): Promise<Vote> => {
  const topic: Topic | null = await findTopicById(data.topicId);
  if (!topic) throw new Error("Topic not found");
  if (topic.closed) throw new Error("Topic is closed");

  return await createVote({
    topicId: data.topicId,
    userId: data.userId,
    choice: data.choice,
  });
};

export const getResult = async (topicId: number): Promise<Result> => {
  const topic: Topic | null = await findTopicById(topicId);
  if (!topic) throw new Error("Topic not found");

  const [optionA, optionB] = await Promise.all([countVotesByTopic(topicId, "A"), countVotesByTopic(topicId, "B")]);

  return {
    topicId,
    votes: [
      { choice: topic.optionA, count: optionA },
      { choice: topic.optionB, count: optionB },
    ],
  };
};

export const getTopicDraft = async (): Promise<TopicDraft> => {
  return {
    title: "今日のVS",
    question: "AとBどっち？",
    optionA: "からあげ",
    optionB: "カレー",
  };
};

export const closeTopic = async (topicId: number): Promise<void> => {
  updateTopic(topicId, { closed: true });
};

const TZ = process.env["TIME_ZONE"] || "Asia/Tokyo";
const jstTodayDateOnly = (): Date => {
  const nowJst = toZonedTime(new Date(), TZ);
  // JST の日付だけ抜き出し（00:00固定）
  const jst00 = new Date(nowJst.getFullYear(), nowJst.getMonth(), nowJst.getDate(), 0, 0, 0, 0);
  // UTC に戻して DB に保存する
  return fromZonedTime(jst00, TZ);
};

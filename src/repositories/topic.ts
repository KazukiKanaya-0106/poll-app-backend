import { Topic, Vote } from "../generated/zod";
import { ChoiceType } from "../generated/zod/inputTypeSchemas/ChoiceSchema";
import { CreateTopic, CreateVote } from "../schemas/topic";
import { prisma } from "../clients/prisma";

export const createVote = async (data: CreateVote): Promise<Vote> => {
  return await prisma.vote.create({
    data: {
      topicId: data.topicId,
      userId: data.userId,
      choice: data.choice,
    },
  });
};

export const countVotesByTopic = async (topicId: number, choice: ChoiceType): Promise<number> => {
  return await prisma.vote.count({
    where: {
      topicId: topicId,
      choice: choice,
    },
  });
};

export const createTopic = async (data: CreateTopic): Promise<Topic> => {
  return await prisma.topic.create({
    data: {
      title: data.title,
      question: data.question,
      optionA: data.optionA,
      optionB: data.optionB,
    },
  });
};

export const findTopicByDate = async (date: Date): Promise<Topic | null> => {
  return await prisma.topic.findUnique({
    where: {
      day: date,
    },
  });
};

export const findTopicById = async (topicId: number): Promise<Topic | null> => {
  return await prisma.topic.findUnique({
    where: {
      id: topicId,
    },
  });
};

export const updateTopic = async (topicId: number, data: Partial<Topic>): Promise<void> => {
  await prisma.topic.update({
    where: {
      id: topicId,
    },
    data,
  });
};

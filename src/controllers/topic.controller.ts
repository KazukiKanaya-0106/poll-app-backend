import type { Request, Response } from "express";
import { getResult, getTodayTopic, voteOnTopic } from "../services/topic.service";
import { Topic, Vote } from "../generated/zod";
import { Result } from "../schemas/topic.schema";

export const todayController = async (_req: Request, res: Response) => {
  const topic: Topic = await getTodayTopic();
  res.json(topic);
};

export const voteController = async (req: Request, res: Response) => {
  const { userId, choice } = req.body;
  const topicId: string | undefined = req.params["id"];
  if (!topicId || !userId || !choice) res.status(400).json({ error: "Missing required fields" });

  const vote: Vote = await voteOnTopic({
    topicId: Number(topicId),
    userId,
    choice,
  });
  res.json(vote);
};

export const resultController = async (req: Request, res: Response) => {
  const topicId: string | undefined = req.params["id"];
  if (!topicId) res.status(400).json({ error: "Missing topicId" });

  const result: Result = await getResult(Number(topicId));
  res.json(result);
};

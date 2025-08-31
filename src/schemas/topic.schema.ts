import z from "zod";
import { ChoiceSchema } from "../generated/zod";

export const resultSchema = z.object({
  topicId: z.number(),
  votes: z.array(
    z.object({
      choice: z.string(),
      count: z.number(),
    }),
  ),
});

export type Result = z.infer<typeof resultSchema>;

export const createVoteSchema = z.object({
  topicId: z.number(),
  userId: z.string(),
  choice: ChoiceSchema,
});

export type CreateVote = z.infer<typeof createVoteSchema>;

export const createTopicSchema = z.object({
  title: z.string().min(2).max(100),
  question: z.string().min(2).max(200),
  optionA: z.string().min(2).max(100),
  optionB: z.string().min(2).max(100),
});

export type CreateTopic = z.infer<typeof createTopicSchema>;

export const topicDraftSchema = z.object({
  title: z.string().min(2).max(100),
  question: z.string().min(2).max(200),
  optionA: z.string().min(2).max(100),
  optionB: z.string().min(2).max(100),
});

export type TopicDraft = z.infer<typeof topicDraftSchema>;

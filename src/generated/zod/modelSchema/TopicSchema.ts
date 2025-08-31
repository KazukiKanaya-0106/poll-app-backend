import { z } from 'zod';

/////////////////////////////////////////
// TOPIC SCHEMA
/////////////////////////////////////////

export const TopicSchema = z.object({
  id: z.number().int(),
  day: z.coerce.date(),
  title: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  openedAt: z.coerce.date(),
  closed: z.boolean(),
})

export type Topic = z.infer<typeof TopicSchema>

export default TopicSchema;

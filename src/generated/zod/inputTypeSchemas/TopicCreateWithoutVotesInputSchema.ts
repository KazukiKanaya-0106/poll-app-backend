import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TopicCreateWithoutVotesInputSchema: z.ZodType<Prisma.TopicCreateWithoutVotesInput> = z.object({
  day: z.coerce.date().optional(),
  title: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  openedAt: z.coerce.date().optional(),
  closed: z.boolean().optional()
}).strict();

export default TopicCreateWithoutVotesInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TopicUncheckedCreateWithoutVotesInputSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutVotesInput> = z.object({
  id: z.number().int().optional(),
  day: z.coerce.date().optional(),
  title: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  openedAt: z.coerce.date().optional(),
  closed: z.boolean().optional()
}).strict();

export default TopicUncheckedCreateWithoutVotesInputSchema;

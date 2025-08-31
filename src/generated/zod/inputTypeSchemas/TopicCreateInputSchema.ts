import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateNestedManyWithoutTopicInputSchema } from './VoteCreateNestedManyWithoutTopicInputSchema';

export const TopicCreateInputSchema: z.ZodType<Prisma.TopicCreateInput> = z.object({
  day: z.coerce.date().optional(),
  title: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  openedAt: z.coerce.date().optional(),
  closed: z.boolean().optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutTopicInputSchema).optional()
}).strict();

export default TopicCreateInputSchema;

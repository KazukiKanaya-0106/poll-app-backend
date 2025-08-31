import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteUncheckedCreateNestedManyWithoutTopicInputSchema } from './VoteUncheckedCreateNestedManyWithoutTopicInputSchema';

export const TopicUncheckedCreateInputSchema: z.ZodType<Prisma.TopicUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  day: z.coerce.date().optional(),
  title: z.string(),
  question: z.string(),
  optionA: z.string(),
  optionB: z.string(),
  openedAt: z.coerce.date().optional(),
  closed: z.boolean().optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutTopicInputSchema).optional()
}).strict();

export default TopicUncheckedCreateInputSchema;

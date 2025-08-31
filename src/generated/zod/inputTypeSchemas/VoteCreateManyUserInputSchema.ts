import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const VoteCreateManyUserInputSchema: z.ZodType<Prisma.VoteCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  topicId: z.number().int(),
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default VoteCreateManyUserInputSchema;

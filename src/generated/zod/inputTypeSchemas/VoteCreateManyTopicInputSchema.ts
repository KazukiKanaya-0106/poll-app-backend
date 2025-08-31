import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const VoteCreateManyTopicInputSchema: z.ZodType<Prisma.VoteCreateManyTopicInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default VoteCreateManyTopicInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const VoteCreateManyInputSchema: z.ZodType<Prisma.VoteCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  topicId: z.number().int(),
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default VoteCreateManyInputSchema;

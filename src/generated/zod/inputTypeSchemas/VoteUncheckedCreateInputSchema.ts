import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const VoteUncheckedCreateInputSchema: z.ZodType<Prisma.VoteUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  topicId: z.number().int(),
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default VoteUncheckedCreateInputSchema;

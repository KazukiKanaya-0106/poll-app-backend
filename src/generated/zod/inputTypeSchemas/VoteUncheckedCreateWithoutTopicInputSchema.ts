import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const VoteUncheckedCreateWithoutTopicInputSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutTopicInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export default VoteUncheckedCreateWithoutTopicInputSchema;

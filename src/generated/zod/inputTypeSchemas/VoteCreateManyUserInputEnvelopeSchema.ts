import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateManyUserInputSchema } from './VoteCreateManyUserInputSchema';

export const VoteCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.VoteCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoteCreateManyUserInputSchema),z.lazy(() => VoteCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VoteCreateManyUserInputEnvelopeSchema;

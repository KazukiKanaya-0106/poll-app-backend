import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateManyTopicInputSchema } from './VoteCreateManyTopicInputSchema';

export const VoteCreateManyTopicInputEnvelopeSchema: z.ZodType<Prisma.VoteCreateManyTopicInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoteCreateManyTopicInputSchema),z.lazy(() => VoteCreateManyTopicInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VoteCreateManyTopicInputEnvelopeSchema;

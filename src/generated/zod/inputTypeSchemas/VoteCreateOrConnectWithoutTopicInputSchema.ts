import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteCreateWithoutTopicInputSchema } from './VoteCreateWithoutTopicInputSchema';
import { VoteUncheckedCreateWithoutTopicInputSchema } from './VoteUncheckedCreateWithoutTopicInputSchema';

export const VoteCreateOrConnectWithoutTopicInputSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutTopicInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoteCreateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema) ]),
}).strict();

export default VoteCreateOrConnectWithoutTopicInputSchema;

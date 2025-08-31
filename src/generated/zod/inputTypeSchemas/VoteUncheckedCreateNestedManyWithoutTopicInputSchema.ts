import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateWithoutTopicInputSchema } from './VoteCreateWithoutTopicInputSchema';
import { VoteUncheckedCreateWithoutTopicInputSchema } from './VoteUncheckedCreateWithoutTopicInputSchema';
import { VoteCreateOrConnectWithoutTopicInputSchema } from './VoteCreateOrConnectWithoutTopicInputSchema';
import { VoteCreateManyTopicInputEnvelopeSchema } from './VoteCreateManyTopicInputEnvelopeSchema';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';

export const VoteUncheckedCreateNestedManyWithoutTopicInputSchema: z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutTopicInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutTopicInputSchema),z.lazy(() => VoteCreateWithoutTopicInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutTopicInputSchema),z.lazy(() => VoteCreateOrConnectWithoutTopicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyTopicInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VoteUncheckedCreateNestedManyWithoutTopicInputSchema;

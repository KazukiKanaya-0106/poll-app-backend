import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateWithoutUserInputSchema } from './VoteCreateWithoutUserInputSchema';
import { VoteUncheckedCreateWithoutUserInputSchema } from './VoteUncheckedCreateWithoutUserInputSchema';
import { VoteCreateOrConnectWithoutUserInputSchema } from './VoteCreateOrConnectWithoutUserInputSchema';
import { VoteCreateManyUserInputEnvelopeSchema } from './VoteCreateManyUserInputEnvelopeSchema';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';

export const VoteUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VoteUncheckedCreateNestedManyWithoutUserInputSchema;

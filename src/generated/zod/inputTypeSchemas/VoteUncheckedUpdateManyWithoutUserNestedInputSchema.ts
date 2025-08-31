import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateWithoutUserInputSchema } from './VoteCreateWithoutUserInputSchema';
import { VoteUncheckedCreateWithoutUserInputSchema } from './VoteUncheckedCreateWithoutUserInputSchema';
import { VoteCreateOrConnectWithoutUserInputSchema } from './VoteCreateOrConnectWithoutUserInputSchema';
import { VoteUpsertWithWhereUniqueWithoutUserInputSchema } from './VoteUpsertWithWhereUniqueWithoutUserInputSchema';
import { VoteCreateManyUserInputEnvelopeSchema } from './VoteCreateManyUserInputEnvelopeSchema';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithWhereUniqueWithoutUserInputSchema } from './VoteUpdateWithWhereUniqueWithoutUserInputSchema';
import { VoteUpdateManyWithWhereWithoutUserInputSchema } from './VoteUpdateManyWithWhereWithoutUserInputSchema';
import { VoteScalarWhereInputSchema } from './VoteScalarWhereInputSchema';

export const VoteUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteCreateWithoutUserInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema),z.lazy(() => VoteCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VoteUncheckedUpdateManyWithoutUserNestedInputSchema;

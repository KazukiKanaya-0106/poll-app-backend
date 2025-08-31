import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateWithoutTopicInputSchema } from './VoteCreateWithoutTopicInputSchema';
import { VoteUncheckedCreateWithoutTopicInputSchema } from './VoteUncheckedCreateWithoutTopicInputSchema';
import { VoteCreateOrConnectWithoutTopicInputSchema } from './VoteCreateOrConnectWithoutTopicInputSchema';
import { VoteUpsertWithWhereUniqueWithoutTopicInputSchema } from './VoteUpsertWithWhereUniqueWithoutTopicInputSchema';
import { VoteCreateManyTopicInputEnvelopeSchema } from './VoteCreateManyTopicInputEnvelopeSchema';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithWhereUniqueWithoutTopicInputSchema } from './VoteUpdateWithWhereUniqueWithoutTopicInputSchema';
import { VoteUpdateManyWithWhereWithoutTopicInputSchema } from './VoteUpdateManyWithWhereWithoutTopicInputSchema';
import { VoteScalarWhereInputSchema } from './VoteScalarWhereInputSchema';

export const VoteUpdateManyWithoutTopicNestedInputSchema: z.ZodType<Prisma.VoteUpdateManyWithoutTopicNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoteCreateWithoutTopicInputSchema),z.lazy(() => VoteCreateWithoutTopicInputSchema).array(),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoteCreateOrConnectWithoutTopicInputSchema),z.lazy(() => VoteCreateOrConnectWithoutTopicInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoteUpsertWithWhereUniqueWithoutTopicInputSchema),z.lazy(() => VoteUpsertWithWhereUniqueWithoutTopicInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoteCreateManyTopicInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoteWhereUniqueInputSchema),z.lazy(() => VoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoteUpdateWithWhereUniqueWithoutTopicInputSchema),z.lazy(() => VoteUpdateWithWhereUniqueWithoutTopicInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoteUpdateManyWithWhereWithoutTopicInputSchema),z.lazy(() => VoteUpdateManyWithWhereWithoutTopicInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default VoteUpdateManyWithoutTopicNestedInputSchema;

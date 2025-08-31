import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithoutTopicInputSchema } from './VoteUpdateWithoutTopicInputSchema';
import { VoteUncheckedUpdateWithoutTopicInputSchema } from './VoteUncheckedUpdateWithoutTopicInputSchema';
import { VoteCreateWithoutTopicInputSchema } from './VoteCreateWithoutTopicInputSchema';
import { VoteUncheckedCreateWithoutTopicInputSchema } from './VoteUncheckedCreateWithoutTopicInputSchema';

export const VoteUpsertWithWhereUniqueWithoutTopicInputSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutTopicInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoteUpdateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutTopicInputSchema) ]),
  create: z.union([ z.lazy(() => VoteCreateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedCreateWithoutTopicInputSchema) ]),
}).strict();

export default VoteUpsertWithWhereUniqueWithoutTopicInputSchema;

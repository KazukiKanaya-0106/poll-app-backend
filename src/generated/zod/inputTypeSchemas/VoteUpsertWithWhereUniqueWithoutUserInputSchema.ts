import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithoutUserInputSchema } from './VoteUpdateWithoutUserInputSchema';
import { VoteUncheckedUpdateWithoutUserInputSchema } from './VoteUncheckedUpdateWithoutUserInputSchema';
import { VoteCreateWithoutUserInputSchema } from './VoteCreateWithoutUserInputSchema';
import { VoteUncheckedCreateWithoutUserInputSchema } from './VoteUncheckedCreateWithoutUserInputSchema';

export const VoteUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VoteUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoteUpdateWithoutUserInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default VoteUpsertWithWhereUniqueWithoutUserInputSchema;

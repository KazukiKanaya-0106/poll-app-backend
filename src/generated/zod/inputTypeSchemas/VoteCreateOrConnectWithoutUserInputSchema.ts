import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteCreateWithoutUserInputSchema } from './VoteCreateWithoutUserInputSchema';
import { VoteUncheckedCreateWithoutUserInputSchema } from './VoteUncheckedCreateWithoutUserInputSchema';

export const VoteCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoteCreateWithoutUserInputSchema),z.lazy(() => VoteUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default VoteCreateOrConnectWithoutUserInputSchema;

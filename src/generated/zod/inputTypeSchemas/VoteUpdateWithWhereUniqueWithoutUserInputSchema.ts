import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithoutUserInputSchema } from './VoteUpdateWithoutUserInputSchema';
import { VoteUncheckedUpdateWithoutUserInputSchema } from './VoteUncheckedUpdateWithoutUserInputSchema';

export const VoteUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateWithoutUserInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default VoteUpdateWithWhereUniqueWithoutUserInputSchema;

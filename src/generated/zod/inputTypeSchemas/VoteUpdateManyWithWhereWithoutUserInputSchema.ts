import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteScalarWhereInputSchema } from './VoteScalarWhereInputSchema';
import { VoteUpdateManyMutationInputSchema } from './VoteUpdateManyMutationInputSchema';
import { VoteUncheckedUpdateManyWithoutUserInputSchema } from './VoteUncheckedUpdateManyWithoutUserInputSchema';

export const VoteUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => VoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateManyMutationInputSchema),z.lazy(() => VoteUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default VoteUpdateManyWithWhereWithoutUserInputSchema;

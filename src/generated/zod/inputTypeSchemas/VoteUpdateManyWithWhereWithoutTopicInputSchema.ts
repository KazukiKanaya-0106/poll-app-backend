import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteScalarWhereInputSchema } from './VoteScalarWhereInputSchema';
import { VoteUpdateManyMutationInputSchema } from './VoteUpdateManyMutationInputSchema';
import { VoteUncheckedUpdateManyWithoutTopicInputSchema } from './VoteUncheckedUpdateManyWithoutTopicInputSchema';

export const VoteUpdateManyWithWhereWithoutTopicInputSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutTopicInput> = z.object({
  where: z.lazy(() => VoteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateManyMutationInputSchema),z.lazy(() => VoteUncheckedUpdateManyWithoutTopicInputSchema) ]),
}).strict();

export default VoteUpdateManyWithWhereWithoutTopicInputSchema;

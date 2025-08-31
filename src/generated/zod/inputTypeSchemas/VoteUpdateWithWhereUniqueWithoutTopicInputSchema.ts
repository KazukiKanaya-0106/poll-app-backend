import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereUniqueInputSchema } from './VoteWhereUniqueInputSchema';
import { VoteUpdateWithoutTopicInputSchema } from './VoteUpdateWithoutTopicInputSchema';
import { VoteUncheckedUpdateWithoutTopicInputSchema } from './VoteUncheckedUpdateWithoutTopicInputSchema';

export const VoteUpdateWithWhereUniqueWithoutTopicInputSchema: z.ZodType<Prisma.VoteUpdateWithWhereUniqueWithoutTopicInput> = z.object({
  where: z.lazy(() => VoteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoteUpdateWithoutTopicInputSchema),z.lazy(() => VoteUncheckedUpdateWithoutTopicInputSchema) ]),
}).strict();

export default VoteUpdateWithWhereUniqueWithoutTopicInputSchema;

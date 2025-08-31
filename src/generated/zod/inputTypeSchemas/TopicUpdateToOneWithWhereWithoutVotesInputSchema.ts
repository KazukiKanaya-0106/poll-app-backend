import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';
import { TopicUpdateWithoutVotesInputSchema } from './TopicUpdateWithoutVotesInputSchema';
import { TopicUncheckedUpdateWithoutVotesInputSchema } from './TopicUncheckedUpdateWithoutVotesInputSchema';

export const TopicUpdateToOneWithWhereWithoutVotesInputSchema: z.ZodType<Prisma.TopicUpdateToOneWithWhereWithoutVotesInput> = z.object({
  where: z.lazy(() => TopicWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TopicUpdateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutVotesInputSchema) ]),
}).strict();

export default TopicUpdateToOneWithWhereWithoutVotesInputSchema;

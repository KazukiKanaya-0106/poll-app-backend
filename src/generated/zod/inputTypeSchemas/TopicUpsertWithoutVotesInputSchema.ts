import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicUpdateWithoutVotesInputSchema } from './TopicUpdateWithoutVotesInputSchema';
import { TopicUncheckedUpdateWithoutVotesInputSchema } from './TopicUncheckedUpdateWithoutVotesInputSchema';
import { TopicCreateWithoutVotesInputSchema } from './TopicCreateWithoutVotesInputSchema';
import { TopicUncheckedCreateWithoutVotesInputSchema } from './TopicUncheckedCreateWithoutVotesInputSchema';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';

export const TopicUpsertWithoutVotesInputSchema: z.ZodType<Prisma.TopicUpsertWithoutVotesInput> = z.object({
  update: z.union([ z.lazy(() => TopicUpdateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutVotesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutVotesInputSchema) ]),
  where: z.lazy(() => TopicWhereInputSchema).optional()
}).strict();

export default TopicUpsertWithoutVotesInputSchema;

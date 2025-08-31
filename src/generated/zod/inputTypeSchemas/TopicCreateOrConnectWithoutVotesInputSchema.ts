import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutVotesInputSchema } from './TopicCreateWithoutVotesInputSchema';
import { TopicUncheckedCreateWithoutVotesInputSchema } from './TopicUncheckedCreateWithoutVotesInputSchema';

export const TopicCreateOrConnectWithoutVotesInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutVotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutVotesInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutVotesInputSchema;

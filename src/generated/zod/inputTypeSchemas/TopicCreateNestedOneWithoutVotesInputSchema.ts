import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutVotesInputSchema } from './TopicCreateWithoutVotesInputSchema';
import { TopicUncheckedCreateWithoutVotesInputSchema } from './TopicUncheckedCreateWithoutVotesInputSchema';
import { TopicCreateOrConnectWithoutVotesInputSchema } from './TopicCreateOrConnectWithoutVotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicCreateNestedOneWithoutVotesInputSchema: z.ZodType<Prisma.TopicCreateNestedOneWithoutVotesInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TopicCreateOrConnectWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => TopicWhereUniqueInputSchema).optional()
}).strict();

export default TopicCreateNestedOneWithoutVotesInputSchema;

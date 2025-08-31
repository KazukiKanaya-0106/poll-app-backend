import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutVotesInputSchema } from './TopicCreateWithoutVotesInputSchema';
import { TopicUncheckedCreateWithoutVotesInputSchema } from './TopicUncheckedCreateWithoutVotesInputSchema';
import { TopicCreateOrConnectWithoutVotesInputSchema } from './TopicCreateOrConnectWithoutVotesInputSchema';
import { TopicUpsertWithoutVotesInputSchema } from './TopicUpsertWithoutVotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateToOneWithWhereWithoutVotesInputSchema } from './TopicUpdateToOneWithWhereWithoutVotesInputSchema';
import { TopicUpdateWithoutVotesInputSchema } from './TopicUpdateWithoutVotesInputSchema';
import { TopicUncheckedUpdateWithoutVotesInputSchema } from './TopicUncheckedUpdateWithoutVotesInputSchema';

export const TopicUpdateOneRequiredWithoutVotesNestedInputSchema: z.ZodType<Prisma.TopicUpdateOneRequiredWithoutVotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TopicCreateOrConnectWithoutVotesInputSchema).optional(),
  upsert: z.lazy(() => TopicUpsertWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => TopicWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TopicUpdateToOneWithWhereWithoutVotesInputSchema),z.lazy(() => TopicUpdateWithoutVotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutVotesInputSchema) ]).optional(),
}).strict();

export default TopicUpdateOneRequiredWithoutVotesNestedInputSchema;

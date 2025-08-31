import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteFindManyArgsSchema } from "../outputTypeSchemas/VoteFindManyArgsSchema"
import { TopicCountOutputTypeArgsSchema } from "../outputTypeSchemas/TopicCountOutputTypeArgsSchema"

export const TopicIncludeSchema: z.ZodType<Prisma.TopicInclude> = z.object({
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TopicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TopicIncludeSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TopicArgsSchema } from "../outputTypeSchemas/TopicArgsSchema"

export const VoteIncludeSchema: z.ZodType<Prisma.VoteInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  topic: z.union([z.boolean(),z.lazy(() => TopicArgsSchema)]).optional(),
}).strict()

export default VoteIncludeSchema;

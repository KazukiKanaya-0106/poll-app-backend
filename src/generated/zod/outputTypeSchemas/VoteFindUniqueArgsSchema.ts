import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteIncludeSchema } from '../inputTypeSchemas/VoteIncludeSchema'
import { VoteWhereUniqueInputSchema } from '../inputTypeSchemas/VoteWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TopicArgsSchema } from "../outputTypeSchemas/TopicArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VoteSelectSchema: z.ZodType<Prisma.VoteSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  topicId: z.boolean().optional(),
  choice: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  topic: z.union([z.boolean(),z.lazy(() => TopicArgsSchema)]).optional(),
}).strict()

export const VoteFindUniqueArgsSchema: z.ZodType<Prisma.VoteFindUniqueArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: z.lazy(() => VoteIncludeSchema).optional(),
  where: VoteWhereUniqueInputSchema,
}).strict() ;

export default VoteFindUniqueArgsSchema;

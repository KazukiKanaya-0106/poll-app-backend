import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteIncludeSchema } from '../inputTypeSchemas/VoteIncludeSchema'
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'
import { VoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/VoteOrderByWithRelationInputSchema'
import { VoteWhereUniqueInputSchema } from '../inputTypeSchemas/VoteWhereUniqueInputSchema'
import { VoteScalarFieldEnumSchema } from '../inputTypeSchemas/VoteScalarFieldEnumSchema'
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

export const VoteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VoteFindFirstOrThrowArgs> = z.object({
  select: VoteSelectSchema.optional(),
  include: z.lazy(() => VoteIncludeSchema).optional(),
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VoteScalarFieldEnumSchema,VoteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default VoteFindFirstOrThrowArgsSchema;

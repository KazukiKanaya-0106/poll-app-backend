import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicIncludeSchema } from '../inputTypeSchemas/TopicIncludeSchema'
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'
import { TopicOrderByWithRelationInputSchema } from '../inputTypeSchemas/TopicOrderByWithRelationInputSchema'
import { TopicWhereUniqueInputSchema } from '../inputTypeSchemas/TopicWhereUniqueInputSchema'
import { TopicScalarFieldEnumSchema } from '../inputTypeSchemas/TopicScalarFieldEnumSchema'
import { VoteFindManyArgsSchema } from "../outputTypeSchemas/VoteFindManyArgsSchema"
import { TopicCountOutputTypeArgsSchema } from "../outputTypeSchemas/TopicCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopicSelectSchema: z.ZodType<Prisma.TopicSelect> = z.object({
  id: z.boolean().optional(),
  day: z.boolean().optional(),
  title: z.boolean().optional(),
  question: z.boolean().optional(),
  optionA: z.boolean().optional(),
  optionB: z.boolean().optional(),
  openedAt: z.boolean().optional(),
  closed: z.boolean().optional(),
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TopicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TopicFindFirstArgsSchema: z.ZodType<Prisma.TopicFindFirstArgs> = z.object({
  select: TopicSelectSchema.optional(),
  include: z.lazy(() => TopicIncludeSchema).optional(),
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([ TopicOrderByWithRelationInputSchema.array(),TopicOrderByWithRelationInputSchema ]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TopicScalarFieldEnumSchema,TopicScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TopicFindFirstArgsSchema;

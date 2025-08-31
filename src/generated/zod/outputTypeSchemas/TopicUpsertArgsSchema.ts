import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicIncludeSchema } from '../inputTypeSchemas/TopicIncludeSchema'
import { TopicWhereUniqueInputSchema } from '../inputTypeSchemas/TopicWhereUniqueInputSchema'
import { TopicCreateInputSchema } from '../inputTypeSchemas/TopicCreateInputSchema'
import { TopicUncheckedCreateInputSchema } from '../inputTypeSchemas/TopicUncheckedCreateInputSchema'
import { TopicUpdateInputSchema } from '../inputTypeSchemas/TopicUpdateInputSchema'
import { TopicUncheckedUpdateInputSchema } from '../inputTypeSchemas/TopicUncheckedUpdateInputSchema'
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

export const TopicUpsertArgsSchema: z.ZodType<Prisma.TopicUpsertArgs> = z.object({
  select: TopicSelectSchema.optional(),
  include: z.lazy(() => TopicIncludeSchema).optional(),
  where: TopicWhereUniqueInputSchema,
  create: z.union([ TopicCreateInputSchema,TopicUncheckedCreateInputSchema ]),
  update: z.union([ TopicUpdateInputSchema,TopicUncheckedUpdateInputSchema ]),
}).strict() ;

export default TopicUpsertArgsSchema;

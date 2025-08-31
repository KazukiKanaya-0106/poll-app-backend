import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'
import { VoteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VoteOrderByWithAggregationInputSchema'
import { VoteScalarFieldEnumSchema } from '../inputTypeSchemas/VoteScalarFieldEnumSchema'
import { VoteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VoteScalarWhereWithAggregatesInputSchema'

export const VoteGroupByArgsSchema: z.ZodType<Prisma.VoteGroupByArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithAggregationInputSchema.array(),VoteOrderByWithAggregationInputSchema ]).optional(),
  by: VoteScalarFieldEnumSchema.array(),
  having: VoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VoteGroupByArgsSchema;

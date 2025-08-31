import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'
import { VoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/VoteOrderByWithRelationInputSchema'
import { VoteWhereUniqueInputSchema } from '../inputTypeSchemas/VoteWhereUniqueInputSchema'

export const VoteAggregateArgsSchema: z.ZodType<Prisma.VoteAggregateArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
  orderBy: z.union([ VoteOrderByWithRelationInputSchema.array(),VoteOrderByWithRelationInputSchema ]).optional(),
  cursor: VoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VoteAggregateArgsSchema;

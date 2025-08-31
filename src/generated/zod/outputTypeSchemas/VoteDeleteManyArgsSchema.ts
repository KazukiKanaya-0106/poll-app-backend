import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'

export const VoteDeleteManyArgsSchema: z.ZodType<Prisma.VoteDeleteManyArgs> = z.object({
  where: VoteWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default VoteDeleteManyArgsSchema;

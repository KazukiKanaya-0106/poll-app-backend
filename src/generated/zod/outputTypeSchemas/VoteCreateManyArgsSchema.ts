import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteCreateManyInputSchema } from '../inputTypeSchemas/VoteCreateManyInputSchema'

export const VoteCreateManyArgsSchema: z.ZodType<Prisma.VoteCreateManyArgs> = z.object({
  data: z.union([ VoteCreateManyInputSchema,VoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VoteCreateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteCreateManyInputSchema } from '../inputTypeSchemas/VoteCreateManyInputSchema'

export const VoteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VoteCreateManyAndReturnArgs> = z.object({
  data: z.union([ VoteCreateManyInputSchema,VoteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VoteCreateManyAndReturnArgsSchema;

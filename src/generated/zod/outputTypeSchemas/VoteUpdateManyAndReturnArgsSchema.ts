import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/VoteUpdateManyMutationInputSchema'
import { VoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VoteUncheckedUpdateManyInputSchema'
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'

export const VoteUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VoteUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VoteUpdateManyMutationInputSchema,VoteUncheckedUpdateManyInputSchema ]),
  where: VoteWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default VoteUpdateManyAndReturnArgsSchema;

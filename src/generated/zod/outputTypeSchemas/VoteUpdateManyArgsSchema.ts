import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/VoteUpdateManyMutationInputSchema'
import { VoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VoteUncheckedUpdateManyInputSchema'
import { VoteWhereInputSchema } from '../inputTypeSchemas/VoteWhereInputSchema'

export const VoteUpdateManyArgsSchema: z.ZodType<Prisma.VoteUpdateManyArgs> = z.object({
  data: z.union([ VoteUpdateManyMutationInputSchema,VoteUncheckedUpdateManyInputSchema ]),
  where: VoteWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default VoteUpdateManyArgsSchema;

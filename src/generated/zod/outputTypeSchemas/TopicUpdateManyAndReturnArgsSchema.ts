import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicUpdateManyMutationInputSchema } from '../inputTypeSchemas/TopicUpdateManyMutationInputSchema'
import { TopicUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TopicUncheckedUpdateManyInputSchema'
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'

export const TopicUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TopicUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TopicUpdateManyMutationInputSchema,TopicUncheckedUpdateManyInputSchema ]),
  where: TopicWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TopicUpdateManyAndReturnArgsSchema;

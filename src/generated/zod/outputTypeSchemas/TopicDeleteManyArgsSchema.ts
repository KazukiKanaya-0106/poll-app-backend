import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'

export const TopicDeleteManyArgsSchema: z.ZodType<Prisma.TopicDeleteManyArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TopicDeleteManyArgsSchema;

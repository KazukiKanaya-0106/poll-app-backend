import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';

export const TopicScalarRelationFilterSchema: z.ZodType<Prisma.TopicScalarRelationFilter> = z.object({
  is: z.lazy(() => TopicWhereInputSchema).optional(),
  isNot: z.lazy(() => TopicWhereInputSchema).optional()
}).strict();

export default TopicScalarRelationFilterSchema;

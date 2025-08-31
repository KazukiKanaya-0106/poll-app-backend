import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TopicAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TopicAvgOrderByAggregateInputSchema;

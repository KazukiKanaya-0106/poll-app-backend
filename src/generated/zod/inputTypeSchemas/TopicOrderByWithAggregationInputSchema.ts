import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TopicCountOrderByAggregateInputSchema } from './TopicCountOrderByAggregateInputSchema';
import { TopicAvgOrderByAggregateInputSchema } from './TopicAvgOrderByAggregateInputSchema';
import { TopicMaxOrderByAggregateInputSchema } from './TopicMaxOrderByAggregateInputSchema';
import { TopicMinOrderByAggregateInputSchema } from './TopicMinOrderByAggregateInputSchema';
import { TopicSumOrderByAggregateInputSchema } from './TopicSumOrderByAggregateInputSchema';

export const TopicOrderByWithAggregationInputSchema: z.ZodType<Prisma.TopicOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  optionA: z.lazy(() => SortOrderSchema).optional(),
  optionB: z.lazy(() => SortOrderSchema).optional(),
  openedAt: z.lazy(() => SortOrderSchema).optional(),
  closed: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TopicCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TopicAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TopicMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TopicMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TopicSumOrderByAggregateInputSchema).optional()
}).strict();

export default TopicOrderByWithAggregationInputSchema;

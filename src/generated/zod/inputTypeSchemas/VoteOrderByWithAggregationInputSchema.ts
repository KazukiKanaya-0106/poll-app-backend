import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VoteCountOrderByAggregateInputSchema } from './VoteCountOrderByAggregateInputSchema';
import { VoteAvgOrderByAggregateInputSchema } from './VoteAvgOrderByAggregateInputSchema';
import { VoteMaxOrderByAggregateInputSchema } from './VoteMaxOrderByAggregateInputSchema';
import { VoteMinOrderByAggregateInputSchema } from './VoteMinOrderByAggregateInputSchema';
import { VoteSumOrderByAggregateInputSchema } from './VoteSumOrderByAggregateInputSchema';

export const VoteOrderByWithAggregationInputSchema: z.ZodType<Prisma.VoteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  topicId: z.lazy(() => SortOrderSchema).optional(),
  choice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VoteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VoteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VoteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VoteSumOrderByAggregateInputSchema).optional()
}).strict();

export default VoteOrderByWithAggregationInputSchema;

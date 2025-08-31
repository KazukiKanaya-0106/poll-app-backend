import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VoteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VoteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  topicId: z.lazy(() => SortOrderSchema).optional(),
  choice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VoteMaxOrderByAggregateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TopicMinOrderByAggregateInputSchema: z.ZodType<Prisma.TopicMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  optionA: z.lazy(() => SortOrderSchema).optional(),
  optionB: z.lazy(() => SortOrderSchema).optional(),
  openedAt: z.lazy(() => SortOrderSchema).optional(),
  closed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TopicMinOrderByAggregateInputSchema;

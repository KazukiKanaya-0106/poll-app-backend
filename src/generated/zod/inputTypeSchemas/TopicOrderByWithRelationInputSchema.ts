import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VoteOrderByRelationAggregateInputSchema } from './VoteOrderByRelationAggregateInputSchema';

export const TopicOrderByWithRelationInputSchema: z.ZodType<Prisma.TopicOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  day: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => SortOrderSchema).optional(),
  optionA: z.lazy(() => SortOrderSchema).optional(),
  optionB: z.lazy(() => SortOrderSchema).optional(),
  openedAt: z.lazy(() => SortOrderSchema).optional(),
  closed: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => VoteOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TopicOrderByWithRelationInputSchema;

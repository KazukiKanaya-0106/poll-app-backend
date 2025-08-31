import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VoteSumOrderByAggregateInputSchema: z.ZodType<Prisma.VoteSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  topicId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VoteSumOrderByAggregateInputSchema;

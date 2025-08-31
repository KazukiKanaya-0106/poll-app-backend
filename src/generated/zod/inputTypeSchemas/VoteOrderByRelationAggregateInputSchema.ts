import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VoteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VoteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VoteOrderByRelationAggregateInputSchema;

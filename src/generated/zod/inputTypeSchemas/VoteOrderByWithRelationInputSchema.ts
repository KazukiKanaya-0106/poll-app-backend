import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { TopicOrderByWithRelationInputSchema } from './TopicOrderByWithRelationInputSchema';

export const VoteOrderByWithRelationInputSchema: z.ZodType<Prisma.VoteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  topicId: z.lazy(() => SortOrderSchema).optional(),
  choice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  topic: z.lazy(() => TopicOrderByWithRelationInputSchema).optional()
}).strict();

export default VoteOrderByWithRelationInputSchema;

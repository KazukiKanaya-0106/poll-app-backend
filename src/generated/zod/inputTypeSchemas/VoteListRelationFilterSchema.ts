import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteWhereInputSchema } from './VoteWhereInputSchema';

export const VoteListRelationFilterSchema: z.ZodType<Prisma.VoteListRelationFilter> = z.object({
  every: z.lazy(() => VoteWhereInputSchema).optional(),
  some: z.lazy(() => VoteWhereInputSchema).optional(),
  none: z.lazy(() => VoteWhereInputSchema).optional()
}).strict();

export default VoteListRelationFilterSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumChoiceWithAggregatesFilterSchema } from './EnumChoiceWithAggregatesFilterSchema';
import { ChoiceSchema } from './ChoiceSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const VoteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VoteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VoteScalarWhereWithAggregatesInputSchema),z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteScalarWhereWithAggregatesInputSchema),z.lazy(() => VoteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  topicId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  choice: z.union([ z.lazy(() => EnumChoiceWithAggregatesFilterSchema),z.lazy(() => ChoiceSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VoteScalarWhereWithAggregatesInputSchema;

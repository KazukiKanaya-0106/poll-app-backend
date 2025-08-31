import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const TopicScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TopicScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TopicScalarWhereWithAggregatesInputSchema),z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TopicScalarWhereWithAggregatesInputSchema),z.lazy(() => TopicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  day: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  question: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  optionA: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  optionB: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  openedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  closed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default TopicScalarWhereWithAggregatesInputSchema;

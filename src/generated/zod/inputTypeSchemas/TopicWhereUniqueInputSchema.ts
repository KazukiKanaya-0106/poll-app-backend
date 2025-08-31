import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { VoteListRelationFilterSchema } from './VoteListRelationFilterSchema';

export const TopicWhereUniqueInputSchema: z.ZodType<Prisma.TopicWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    day: z.coerce.date()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    day: z.coerce.date(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  day: z.coerce.date().optional(),
  AND: z.union([ z.lazy(() => TopicWhereInputSchema),z.lazy(() => TopicWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TopicWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TopicWhereInputSchema),z.lazy(() => TopicWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  question: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  optionA: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  optionB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  openedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  closed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  votes: z.lazy(() => VoteListRelationFilterSchema).optional()
}).strict());

export default TopicWhereUniqueInputSchema;

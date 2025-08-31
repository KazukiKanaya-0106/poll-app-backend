import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { VoteListRelationFilterSchema } from './VoteListRelationFilterSchema';

export const TopicWhereInputSchema: z.ZodType<Prisma.TopicWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TopicWhereInputSchema),z.lazy(() => TopicWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TopicWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TopicWhereInputSchema),z.lazy(() => TopicWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  day: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  question: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  optionA: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  optionB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  openedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  closed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  votes: z.lazy(() => VoteListRelationFilterSchema).optional()
}).strict();

export default TopicWhereInputSchema;

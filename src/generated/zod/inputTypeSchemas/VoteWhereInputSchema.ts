import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumChoiceFilterSchema } from './EnumChoiceFilterSchema';
import { ChoiceSchema } from './ChoiceSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { TopicScalarRelationFilterSchema } from './TopicScalarRelationFilterSchema';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';

export const VoteWhereInputSchema: z.ZodType<Prisma.VoteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  topicId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  choice: z.union([ z.lazy(() => EnumChoiceFilterSchema),z.lazy(() => ChoiceSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  topic: z.union([ z.lazy(() => TopicScalarRelationFilterSchema),z.lazy(() => TopicWhereInputSchema) ]).optional(),
}).strict();

export default VoteWhereInputSchema;

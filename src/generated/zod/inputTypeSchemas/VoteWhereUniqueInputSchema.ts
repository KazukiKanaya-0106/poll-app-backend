import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteUserIdTopicIdCompoundUniqueInputSchema } from './VoteUserIdTopicIdCompoundUniqueInputSchema';
import { VoteWhereInputSchema } from './VoteWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumChoiceFilterSchema } from './EnumChoiceFilterSchema';
import { ChoiceSchema } from './ChoiceSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { TopicScalarRelationFilterSchema } from './TopicScalarRelationFilterSchema';
import { TopicWhereInputSchema } from './TopicWhereInputSchema';

export const VoteWhereUniqueInputSchema: z.ZodType<Prisma.VoteWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userId_topicId: z.lazy(() => VoteUserIdTopicIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userId_topicId: z.lazy(() => VoteUserIdTopicIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userId_topicId: z.lazy(() => VoteUserIdTopicIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteWhereInputSchema),z.lazy(() => VoteWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  topicId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  choice: z.union([ z.lazy(() => EnumChoiceFilterSchema),z.lazy(() => ChoiceSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  topic: z.union([ z.lazy(() => TopicScalarRelationFilterSchema),z.lazy(() => TopicWhereInputSchema) ]).optional(),
}).strict());

export default VoteWhereUniqueInputSchema;

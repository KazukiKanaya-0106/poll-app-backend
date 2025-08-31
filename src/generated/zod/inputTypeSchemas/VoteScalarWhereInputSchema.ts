import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumChoiceFilterSchema } from './EnumChoiceFilterSchema';
import { ChoiceSchema } from './ChoiceSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const VoteScalarWhereInputSchema: z.ZodType<Prisma.VoteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoteScalarWhereInputSchema),z.lazy(() => VoteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  topicId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  choice: z.union([ z.lazy(() => EnumChoiceFilterSchema),z.lazy(() => ChoiceSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VoteScalarWhereInputSchema;

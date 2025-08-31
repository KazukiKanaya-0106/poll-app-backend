import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumChoiceFilterSchema } from './NestedEnumChoiceFilterSchema';

export const NestedEnumChoiceWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumChoiceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ChoiceSchema).optional(),
  in: z.lazy(() => ChoiceSchema).array().optional(),
  notIn: z.lazy(() => ChoiceSchema).array().optional(),
  not: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => NestedEnumChoiceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumChoiceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumChoiceFilterSchema).optional()
}).strict();

export default NestedEnumChoiceWithAggregatesFilterSchema;

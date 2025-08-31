import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { NestedEnumChoiceFilterSchema } from './NestedEnumChoiceFilterSchema';

export const EnumChoiceFilterSchema: z.ZodType<Prisma.EnumChoiceFilter> = z.object({
  equals: z.lazy(() => ChoiceSchema).optional(),
  in: z.lazy(() => ChoiceSchema).array().optional(),
  notIn: z.lazy(() => ChoiceSchema).array().optional(),
  not: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => NestedEnumChoiceFilterSchema) ]).optional(),
}).strict();

export default EnumChoiceFilterSchema;

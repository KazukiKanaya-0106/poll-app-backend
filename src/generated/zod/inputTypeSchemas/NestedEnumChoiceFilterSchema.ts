import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const NestedEnumChoiceFilterSchema: z.ZodType<Prisma.NestedEnumChoiceFilter> = z.object({
  equals: z.lazy(() => ChoiceSchema).optional(),
  in: z.lazy(() => ChoiceSchema).array().optional(),
  notIn: z.lazy(() => ChoiceSchema).array().optional(),
  not: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => NestedEnumChoiceFilterSchema) ]).optional(),
}).strict();

export default NestedEnumChoiceFilterSchema;

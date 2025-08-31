import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';

export const EnumChoiceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumChoiceFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ChoiceSchema).optional()
}).strict();

export default EnumChoiceFieldUpdateOperationsInputSchema;

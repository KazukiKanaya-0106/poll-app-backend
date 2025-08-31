import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { EnumChoiceFieldUpdateOperationsInputSchema } from './EnumChoiceFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const VoteUpdateManyMutationInputSchema: z.ZodType<Prisma.VoteUpdateManyMutationInput> = z.object({
  choice: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => EnumChoiceFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default VoteUpdateManyMutationInputSchema;

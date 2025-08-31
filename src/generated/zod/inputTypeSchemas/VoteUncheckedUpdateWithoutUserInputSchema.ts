import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ChoiceSchema } from './ChoiceSchema';
import { EnumChoiceFieldUpdateOperationsInputSchema } from './EnumChoiceFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const VoteUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.VoteUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  topicId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  choice: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => EnumChoiceFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default VoteUncheckedUpdateWithoutUserInputSchema;

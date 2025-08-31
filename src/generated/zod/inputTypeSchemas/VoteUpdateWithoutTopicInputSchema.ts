import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { EnumChoiceFieldUpdateOperationsInputSchema } from './EnumChoiceFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutVotesNestedInputSchema } from './UserUpdateOneRequiredWithoutVotesNestedInputSchema';

export const VoteUpdateWithoutTopicInputSchema: z.ZodType<Prisma.VoteUpdateWithoutTopicInput> = z.object({
  choice: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => EnumChoiceFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default VoteUpdateWithoutTopicInputSchema;

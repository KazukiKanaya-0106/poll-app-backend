import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { EnumChoiceFieldUpdateOperationsInputSchema } from './EnumChoiceFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TopicUpdateOneRequiredWithoutVotesNestedInputSchema } from './TopicUpdateOneRequiredWithoutVotesNestedInputSchema';

export const VoteUpdateWithoutUserInputSchema: z.ZodType<Prisma.VoteUpdateWithoutUserInput> = z.object({
  choice: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => EnumChoiceFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topic: z.lazy(() => TopicUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default VoteUpdateWithoutUserInputSchema;

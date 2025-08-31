import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { EnumChoiceFieldUpdateOperationsInputSchema } from './EnumChoiceFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutVotesNestedInputSchema } from './UserUpdateOneRequiredWithoutVotesNestedInputSchema';
import { TopicUpdateOneRequiredWithoutVotesNestedInputSchema } from './TopicUpdateOneRequiredWithoutVotesNestedInputSchema';

export const VoteUpdateInputSchema: z.ZodType<Prisma.VoteUpdateInput> = z.object({
  choice: z.union([ z.lazy(() => ChoiceSchema),z.lazy(() => EnumChoiceFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutVotesNestedInputSchema).optional(),
  topic: z.lazy(() => TopicUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default VoteUpdateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { UserCreateNestedOneWithoutVotesInputSchema } from './UserCreateNestedOneWithoutVotesInputSchema';

export const VoteCreateWithoutTopicInputSchema: z.ZodType<Prisma.VoteCreateWithoutTopicInput> = z.object({
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default VoteCreateWithoutTopicInputSchema;

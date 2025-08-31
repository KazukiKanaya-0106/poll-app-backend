import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { TopicCreateNestedOneWithoutVotesInputSchema } from './TopicCreateNestedOneWithoutVotesInputSchema';

export const VoteCreateWithoutUserInputSchema: z.ZodType<Prisma.VoteCreateWithoutUserInput> = z.object({
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional(),
  topic: z.lazy(() => TopicCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default VoteCreateWithoutUserInputSchema;

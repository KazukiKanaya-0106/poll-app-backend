import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChoiceSchema } from './ChoiceSchema';
import { UserCreateNestedOneWithoutVotesInputSchema } from './UserCreateNestedOneWithoutVotesInputSchema';
import { TopicCreateNestedOneWithoutVotesInputSchema } from './TopicCreateNestedOneWithoutVotesInputSchema';

export const VoteCreateInputSchema: z.ZodType<Prisma.VoteCreateInput> = z.object({
  choice: z.lazy(() => ChoiceSchema),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutVotesInputSchema),
  topic: z.lazy(() => TopicCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default VoteCreateInputSchema;

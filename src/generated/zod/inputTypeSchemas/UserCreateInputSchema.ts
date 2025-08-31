import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteCreateNestedManyWithoutUserInputSchema } from './VoteCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;

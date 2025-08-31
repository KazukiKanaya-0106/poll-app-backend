import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VoteUncheckedCreateNestedManyWithoutUserInputSchema } from './VoteUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;

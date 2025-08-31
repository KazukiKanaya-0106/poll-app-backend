import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutVotesInputSchema } from './UserUpdateWithoutVotesInputSchema';
import { UserUncheckedUpdateWithoutVotesInputSchema } from './UserUncheckedUpdateWithoutVotesInputSchema';

export const UserUpdateToOneWithWhereWithoutVotesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutVotesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutVotesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVotesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutVotesInputSchema;

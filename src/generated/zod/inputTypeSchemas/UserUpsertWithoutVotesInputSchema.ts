import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutVotesInputSchema } from './UserUpdateWithoutVotesInputSchema';
import { UserUncheckedUpdateWithoutVotesInputSchema } from './UserUncheckedUpdateWithoutVotesInputSchema';
import { UserCreateWithoutVotesInputSchema } from './UserCreateWithoutVotesInputSchema';
import { UserUncheckedCreateWithoutVotesInputSchema } from './UserUncheckedCreateWithoutVotesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutVotesInputSchema: z.ZodType<Prisma.UserUpsertWithoutVotesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutVotesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVotesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutVotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutVotesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutVotesInputSchema;

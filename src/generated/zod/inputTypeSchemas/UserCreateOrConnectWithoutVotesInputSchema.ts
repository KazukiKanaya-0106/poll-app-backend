import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutVotesInputSchema } from './UserCreateWithoutVotesInputSchema';
import { UserUncheckedCreateWithoutVotesInputSchema } from './UserUncheckedCreateWithoutVotesInputSchema';

export const UserCreateOrConnectWithoutVotesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutVotesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutVotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutVotesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutVotesInputSchema;

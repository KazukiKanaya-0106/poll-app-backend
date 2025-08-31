import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutVotesInputSchema } from './UserCreateWithoutVotesInputSchema';
import { UserUncheckedCreateWithoutVotesInputSchema } from './UserUncheckedCreateWithoutVotesInputSchema';
import { UserCreateOrConnectWithoutVotesInputSchema } from './UserCreateOrConnectWithoutVotesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutVotesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutVotesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutVotesInputSchema;

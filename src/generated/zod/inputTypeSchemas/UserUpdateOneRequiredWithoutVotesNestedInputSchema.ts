import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutVotesInputSchema } from './UserCreateWithoutVotesInputSchema';
import { UserUncheckedCreateWithoutVotesInputSchema } from './UserUncheckedCreateWithoutVotesInputSchema';
import { UserCreateOrConnectWithoutVotesInputSchema } from './UserCreateOrConnectWithoutVotesInputSchema';
import { UserUpsertWithoutVotesInputSchema } from './UserUpsertWithoutVotesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutVotesInputSchema } from './UserUpdateToOneWithWhereWithoutVotesInputSchema';
import { UserUpdateWithoutVotesInputSchema } from './UserUpdateWithoutVotesInputSchema';
import { UserUncheckedUpdateWithoutVotesInputSchema } from './UserUncheckedUpdateWithoutVotesInputSchema';

export const UserUpdateOneRequiredWithoutVotesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutVotesInputSchema),z.lazy(() => UserUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutVotesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutVotesInputSchema),z.lazy(() => UserUpdateWithoutVotesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutVotesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutVotesNestedInputSchema;

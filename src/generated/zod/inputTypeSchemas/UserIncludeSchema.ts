import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteFindManyArgsSchema } from "../outputTypeSchemas/VoteFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default UserCreateInputSchema;

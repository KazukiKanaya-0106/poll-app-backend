import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteSelectSchema } from '../inputTypeSchemas/VoteSelectSchema';
import { VoteIncludeSchema } from '../inputTypeSchemas/VoteIncludeSchema';

export const VoteArgsSchema: z.ZodType<Prisma.VoteDefaultArgs> = z.object({
  select: z.lazy(() => VoteSelectSchema).optional(),
  include: z.lazy(() => VoteIncludeSchema).optional(),
}).strict();

export default VoteArgsSchema;

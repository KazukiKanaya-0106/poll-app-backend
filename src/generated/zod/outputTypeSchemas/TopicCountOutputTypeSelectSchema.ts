import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TopicCountOutputTypeSelectSchema: z.ZodType<Prisma.TopicCountOutputTypeSelect> = z.object({
  votes: z.boolean().optional(),
}).strict();

export default TopicCountOutputTypeSelectSchema;

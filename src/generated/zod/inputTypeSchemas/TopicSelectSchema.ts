import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VoteFindManyArgsSchema } from "../outputTypeSchemas/VoteFindManyArgsSchema"
import { TopicCountOutputTypeArgsSchema } from "../outputTypeSchemas/TopicCountOutputTypeArgsSchema"

export const TopicSelectSchema: z.ZodType<Prisma.TopicSelect> = z.object({
  id: z.boolean().optional(),
  day: z.boolean().optional(),
  title: z.boolean().optional(),
  question: z.boolean().optional(),
  optionA: z.boolean().optional(),
  optionB: z.boolean().optional(),
  openedAt: z.boolean().optional(),
  closed: z.boolean().optional(),
  votes: z.union([z.boolean(),z.lazy(() => VoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TopicCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TopicSelectSchema;

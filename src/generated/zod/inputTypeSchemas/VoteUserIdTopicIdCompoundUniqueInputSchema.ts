import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VoteUserIdTopicIdCompoundUniqueInputSchema: z.ZodType<Prisma.VoteUserIdTopicIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  topicId: z.number()
}).strict();

export default VoteUserIdTopicIdCompoundUniqueInputSchema;

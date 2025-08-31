import { z } from 'zod';
import { ChoiceSchema } from '../inputTypeSchemas/ChoiceSchema'

/////////////////////////////////////////
// VOTE SCHEMA
/////////////////////////////////////////

export const VoteSchema = z.object({
  choice: ChoiceSchema,
  id: z.number().int(),
  userId: z.string(),
  topicId: z.number().int(),
  createdAt: z.coerce.date(),
})

export type Vote = z.infer<typeof VoteSchema>

export default VoteSchema;

import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  createdAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;

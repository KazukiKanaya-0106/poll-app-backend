import { z } from 'zod';

export const ChoiceSchema = z.enum(['A','B']);

export type ChoiceType = `${z.infer<typeof ChoiceSchema>}`

export default ChoiceSchema;

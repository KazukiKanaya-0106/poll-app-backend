import { z } from 'zod';

export const VoteScalarFieldEnumSchema = z.enum(['id','userId','topicId','choice','createdAt']);

export default VoteScalarFieldEnumSchema;

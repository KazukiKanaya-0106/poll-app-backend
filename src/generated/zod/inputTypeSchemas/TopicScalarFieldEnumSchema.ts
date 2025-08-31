import { z } from 'zod';

export const TopicScalarFieldEnumSchema = z.enum(['id','day','title','question','optionA','optionB','openedAt','closed']);

export default TopicScalarFieldEnumSchema;

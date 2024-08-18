import { z } from 'zod';

const schema = z.object({
	DATABASE_URL: z.string(),
	NODE_ENV: z.string(),
});
export const env = schema.parse(process.env);

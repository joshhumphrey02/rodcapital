import { z } from 'zod';

const schema = z.object({
	POSTGRES_PRISMA_URL: z.string(),
	POSTGRES_URL_NON_POOLING: z.string(),
});
export const env = schema.parse(process.env);

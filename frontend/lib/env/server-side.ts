import { z } from "zod";

const serverSideEnvSchema = z.object({
	VERCEL_ENV: z
		.enum(["development", "preview", "production"])
		.default("development"),
	VERCEL_GIT_PULL_REQUEST_ID: z
		.string()
		.optional()
		.transform((v) => (v === "" ? undefined : v)), // Treat an empty string as undefined
	CLERK_SECRET_KEY: z.string().min(1),
});

/**
 * Type-safe environment variables available server-side
 */
export const serverSideEnv = serverSideEnvSchema.parse({
	VERCEL_ENV: process.env.VERCEL_ENV,
	VERCEL_GIT_PULL_REQUEST_ID: process.env.VERCEL_GIT_PULL_REQUEST_ID,
	CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
});

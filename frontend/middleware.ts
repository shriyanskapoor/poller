import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Match all routes except static files and _next assets
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};


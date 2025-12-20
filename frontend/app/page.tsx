import { TopNav } from "@/components/top-nav";
import { SignInButton, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
	const { userId } = await auth();

	return (
		<div className="min-h-screen flex flex-col">
			<TopNav />

			<main className="flex flex-1 items-center justify-center">
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-semibold">
						Poller
						{userId ? <span className="text-xl text-muted-foreground"> — {userId}</span> : null}
					</h1>

					<SignedOut>
						<SignInButton mode="modal" forceRedirectUrl="/">
							<button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
								Sign in
							</button>
						</SignInButton>
					</SignedOut>

					<SignedIn>
						<div className="flex items-center justify-center gap-3">
							<span className="text-sm text-muted-foreground">Signed in as {userId}</span>
							<SignOutButton redirectUrl="/">
								<button className="rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted">
									Sign out
								</button>
							</SignOutButton>
						</div>
					</SignedIn>
				</div>
			</main>
		</div>
	);
}


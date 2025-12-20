'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
	return (
		<header className="border-b">
			<div className="container flex items-center justify-between py-3">
				<Link href="/" className="text-lg font-semibold">
					Poller
				</Link>

				<div className="flex items-center gap-3">
					<SignedOut>
						<SignInButton mode="modal" forceRedirectUrl="/">
							<button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
								Sign in
							</button>
						</SignInButton>
					</SignedOut>

					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	);
}


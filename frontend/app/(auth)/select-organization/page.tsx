import Link from "next/link";

/**
 * This page renders the Clerk CreateOrganization component.
 * See https://clerk.com/docs/components/organization/create-organization for more information.
 */
export default function CreateOrganizationPage() {
	return (
		<div className="min-h-screen flex flex-col gap-4 items-center justify-center">
			<p>Organization selection is disabled for this project.</p>
			<Link
				href="/dashboard"
				className="text-primary underline underline-offset-4"
			>
				Go to dashboard
			</Link>
		</div>
	);
}

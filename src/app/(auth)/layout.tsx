import { redirect } from 'next/navigation';
import { validateRequest } from '@/lib/auth/validate-request';

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { session, user } = await validateRequest();
	if (session?.userId) {
		redirect('/dashboard');
	}
	return (
		<>
			<div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-primary" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6">
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						Rod Capital
					</div>
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								“Rod Capital is the best thing that happened to my me. It has
								helped me streamline my operations and increase my revenue.”
							</p>
							<footer className="text-sm">
								<cite className="not-italic">— Jane Doe</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">{children}</div>
			</div>
		</>
	);
}

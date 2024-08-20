'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginInput, loginSchema } from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { login } from '@/lib/auth/actions';
import { LoaderIcon } from 'lucide-react';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AuthLoginForm({
	className,
	...props
}: UserAuthFormProps) {
	const form = useForm<LoginInput>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const [loading, setLoading] = React.useState(false);
	const [state, dispatch] = useFormState(login, undefined);
	async function handleSubmit(data: LoginInput) {
		setLoading(true);
		dispatch(data);
	}
	React.useEffect(() => {
		if (state?.formError) {
			toast.error(state?.formError || 'An error occurred');
		}
		setLoading(false);
	}, [state?.formError, state?.fieldError]);
	return (
		<>
			<Link
				href="/signup"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8'
				)}>
				Open Account
			</Link>
			<div className={cn('grid gap-6', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Your email address"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<div className="flex items-center">
											<FormLabel>Password</FormLabel>
											<Link
												href="/auth/reset-password"
												className="ml-auto inline-block text-sm underline">
												Forgot your password?
											</Link>
										</div>
										<FormControl>
											<Input
												type="password"
												placeholder="Password (min 8 characters)"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid mt-6">
							<Button disabled={loading} className="mt-4" type="submit">
								{loading && (
									<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
								)}
								Login
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
}

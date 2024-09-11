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
import { SignupInput, signupSchema } from '@/lib/validators/auth';
import { useFormState } from 'react-dom';
import { signup } from '@/lib/auth/actions';
import { LoaderIcon } from 'lucide-react';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AuthSignupForm({
	className,
	...props
}: UserAuthFormProps) {
	const form = useForm<SignupInput>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	});
	const [loading, setLoading] = React.useState(false);
	const [state, dispatch] = useFormState(signup, undefined);

	async function handleSubmit(data: SignupInput) {
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
				href="/login"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8'
				)}>
				تسجيل الدخول
			</Link>
			<div className={cn('grid gap-6', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>الاسم الأول</FormLabel>
											<FormControl>
												<Input placeholder="اسمك الأول" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>الاسم الأخير</FormLabel>
											<FormControl>
												<Input placeholder="اسمك الأخير" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>البريد الإلكتروني</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="عنوان بريدك الإلكتروني"
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
										<FormLabel>كلمة المرور</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="كلمة المرور (8 أحرف على الأقل)"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button disabled={loading} className="mt-4" type="submit">
								{loading && (
									<LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
								)}
								متابعة
							</Button>
						</div>
					</form>
				</Form>
			</div>
			<p className="px-8 text-center text-sm text-muted-foreground">
				بالضغط على متابعة، فإنك توافق على{' '}
				<Link
					href="/terms"
					className="underline underline-offset-4 hover:text-primary">
					شروط الخدمة
				</Link>{' '}
				و{' '}
				<Link
					href="/privacy"
					className="underline underline-offset-4 hover:text-primary">
					سياسة الخصوصية
				</Link>
				.
			</p>
		</>
	);
}

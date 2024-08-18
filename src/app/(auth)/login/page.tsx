import { Metadata } from "next";

import AuthLoginForm from "../components/auth-login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account to continue.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to continue.
        </p>
      </div>
      <AuthLoginForm />
    </div>
  );
}

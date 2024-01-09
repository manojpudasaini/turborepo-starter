"use client";
import LoginForm from "@repo/ui/components/organisms/LoginForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "@repo/validations";
import Link from "next/link";
import { loginHandler } from "@repo/services";
import { useRouter } from "next/navigation";
import { confirmSignIn } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@repo/ui/context";
export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const { user, getUserData } = useAuthContext();
  const [buttonLoadfing, setButtonLoading] = useState<boolean>(false);
  useEffect(() => {
    if (user?.userId) {
      router.push("/");
    }
  }, [user]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const handleLogin = async (values: TLoginSchema) => {
    setButtonLoading(true);
    try {
      const user = await loginHandler(values);
      if (
        user.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
      ) {
        //custom auth flow
        const { isSignedIn } = await confirmSignIn({
          challengeResponse: "Manoj",
        });
        isSignedIn && getUserData && getUserData();
        router.push("/");
      }
      if (user.nextStep.signInStep === "CONFIRM_SIGN_UP") {
        // redirect to confirm signup page
        router.push("/confirm?username=" + values.username);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  };
  return (
    <main className="max-w-screen-2xl mx-auto w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl -mt-52 border rounded-md shadow-md p-6">
        <LoginForm
          control={control}
          handleSubmit={handleSubmit}
          handleLogin={handleLogin}
          errors={errors}
          loading={buttonLoadfing}
        />
        <Link href={"/signup"} className="text-center w-fit text-amber-500">
          <p className="mt-5 tracking-wide hover:underline">
            create an account
          </p>
        </Link>
      </div>
    </main>
  );
}

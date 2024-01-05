"use client";
import LoginForm from "@repo/ui/components/organisms/LoginForm";
import { useForm } from "react-hook-form";
import { ILoginFormValues } from "@repo/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@repo/validations";
import { signIn } from "aws-amplify/auth";
import Link from "next/link";

export default function LoginPage(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const handleLogin = async (values: ILoginFormValues) => {
    try {
      await signIn({
        username: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
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
          loading={false}
        />
        <Link href={"/signup"} className="text-center text-yellow-500 mt-4">
          <p>create an account</p>
        </Link>
      </div>
    </main>
  );
}

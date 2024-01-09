"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpForm from "@repo/ui/components/organisms/SignUpForm";
import { TRegisterSchema, registerSchema } from "@repo/validations";
import { useForm } from "react-hook-form";
import { signUpHandler } from "@repo/services";
import { useRouter } from "next/navigation";
function Page(): JSX.Element {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const handleSignUp = async (values: TRegisterSchema) => {
    try {
      const data = await signUpHandler(values);
      console.log(data, "signup data");
      if (data.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        // redirect to confirm signup page
        router.push("/confirm?username=" + values.username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-32 shadow-lg p-6 rounded-lg">
      <SignUpForm
        control={control}
        errors={errors}
        handleSignUp={handleSignUp}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Page;

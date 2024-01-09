"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import ConfirmUserForm from "@repo/ui/components/organisms/ConfirmUserForm";
import { useForm } from "react-hook-form";
import { TConfirmCodeSchema, confrimCodeSchema } from "@repo/validations";
import { useParams, useSearchParams } from "next/navigation";
import { confirmSignUp } from "aws-amplify/auth";
import { useCallback } from "react";
import { userConfirmHandler } from "@repo/services";
function ConfirmPage(): JSX.Element {
  const params = useSearchParams();
  const getUserNameFromParam = useCallback(() => {
    return params.get("username") || "";
  }, [params]);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TConfirmCodeSchema>({
    defaultValues: {
      confirmationCode: "",
    },
    resolver: zodResolver(confrimCodeSchema),
  });

  const handleConfirmUser = async (values: TConfirmCodeSchema) => {
    if (!getUserNameFromParam()) return;
    const { isSignUpComplete, nextStep, userId } = await userConfirmHandler({
      username: getUserNameFromParam(),
      confirmationCode: values.confirmationCode,
    });
    console.log(isSignUpComplete, nextStep, userId);
  };
  return (
    <main className="max-w-screen-2xl mx-auto w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl -mt-52 border rounded-md shadow-md p-6">
        <ConfirmUserForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          handleConfirm={handleConfirmUser}
        />
      </div>
    </main>
  );
}

export default ConfirmPage;

import {
  Controller,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { InputField } from "../..";
import Button from "../../atoms/Button";
import { TRegisterSchema } from "@repo/validations";
interface ILoginProps {
  handleSignUp: SubmitHandler<TRegisterSchema>;
  control: Control<TRegisterSchema, any>;
  handleSubmit: UseFormHandleSubmit<TRegisterSchema>;
  errors: FieldErrors<TRegisterSchema>;
  loading?: boolean;
}

function SignUpForm({
  handleSignUp,
  handleSubmit,
  control,
  errors,
  loading,
}: ILoginProps): JSX.Element {
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex flex-col space-y-4"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <InputField
            name="email"
            field={field}
            label="Email"
            placeholder="Enter your email"
            error={errors?.email?.message}
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <InputField
            name="username"
            field={field}
            label="User name"
            placeholder="Enter your username"
            error={errors?.username?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputField
            name="password"
            type="password"
            field={field}
            label="Password"
            error={errors?.password?.message}
          />
        )}
      />
      <Button text="Sign up" type="submit" loading={loading} />
    </form>
  );
}

export default SignUpForm;

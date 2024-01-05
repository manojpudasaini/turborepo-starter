import {
  Controller,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { ILoginFormValues } from "@repo/types";
import { InputField } from "../..";
import Button from "../../atoms/Button";
interface ILoginProps {
  handleLogin: SubmitHandler<ILoginFormValues>;
  control: Control<ILoginFormValues, any>;
  handleSubmit: UseFormHandleSubmit<ILoginFormValues>;
  errors: FieldErrors<ILoginFormValues>;
  loading: boolean;
}

function LoginForm({
  handleLogin,
  handleSubmit,
  control,
  errors,
  loading,
}: ILoginProps): JSX.Element {
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col space-y-4"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <InputField
            name="Email Address"
            field={field}
            label="Email Address"
            placeholder="your@email.com"
            error={errors?.email?.message}
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
      <Button text="Login" type="submit" loading={loading} />
    </form>
  );
}

export default LoginForm;

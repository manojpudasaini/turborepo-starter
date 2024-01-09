import {
  Controller,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { InputField } from "../..";
import Button from "../../atoms/Button";
import { TLoginSchema } from "@repo/validations";
interface ILoginProps {
  handleLogin: SubmitHandler<TLoginSchema>;
  control: Control<TLoginSchema, any>;
  handleSubmit: UseFormHandleSubmit<TLoginSchema>;
  errors: FieldErrors<TLoginSchema>;
  loading?: boolean;
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
      <Button text="Login" type="submit" loading={loading} />
    </form>
  );
}

export default LoginForm;

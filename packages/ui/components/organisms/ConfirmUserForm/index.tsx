import {
  Controller,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { InputField } from "../..";
import Button from "../../atoms/Button";
import { TConfirmCodeSchema } from "@repo/validations";
interface ILoginProps {
  handleConfirm: SubmitHandler<TConfirmCodeSchema>;
  control: Control<TConfirmCodeSchema, any>;
  handleSubmit: UseFormHandleSubmit<TConfirmCodeSchema>;
  errors: FieldErrors<TConfirmCodeSchema>;
  loading?: boolean;
}

function ConfirmUserForm({
  handleConfirm,
  handleSubmit,
  control,
  errors,
  loading,
}: ILoginProps): JSX.Element {
  return (
    <form
      onSubmit={handleSubmit(handleConfirm)}
      className="flex flex-col space-y-4"
    >
      <Controller
        name="confirmationCode"
        control={control}
        render={({ field }) => (
          <InputField
            name="confirmationCode"
            field={field}
            label="Confirmation code"
            error={errors?.confirmationCode?.message}
          />
        )}
      />

      <Button text="Verify" type="submit" loading={loading} />
    </form>
  );
}

export default ConfirmUserForm;

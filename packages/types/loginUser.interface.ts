export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface ISignUpFormValues extends ILoginFormValues {
  email: string;
}

export interface IConfirmUserFormValues {
  username: string;
  confirmationCode: string;
}

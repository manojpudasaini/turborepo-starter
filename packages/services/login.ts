import { IConfirmUserFormValues, ILoginFormValues } from "@repo/types";
import { TRegisterSchema } from "@repo/validations";
import {
  signIn,
  signUp,
  confirmSignUp,
  signOut,
  getCurrentUser,
  fetchAuthSession,
} from "aws-amplify/auth";

export const loginHandler = (values: ILoginFormValues) => {
  return signIn({
    username: values.username,
    password: values.password,
    options: {
      authFlowType: "CUSTOM_WITH_SRP",
    },
  });
};

export const signUpHandler = (values: TRegisterSchema) => {
  return signUp({
    username: values.username,
    password: values.password,
    options: {
      userAttributes: {
        email: values.email,
      },
    },
  });
};

export const userConfirmHandler = (value: IConfirmUserFormValues) => {
  return confirmSignUp({
    username: value.username,
    confirmationCode: value.confirmationCode,
  });
};

export const userSignOutHandler = () => {
  return signOut();
};

export const getCurrentUserDetails = () => {
  return getCurrentUser();
};

import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, { message: "Please enter a valid username" }),
  password: z.string().min(8, { message: "Please enter  password" }),
});

export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, { message: "Please enter password" }),
  username: z.string().min(3, { message: "Please enter valid username" }),
});

export const confrimCodeSchema = z.object({
  confirmationCode: z
    .string()
    .min(6, { message: "Please enter valid confirmation code" }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
export type TConfirmCodeSchema = z.infer<typeof confrimCodeSchema>;

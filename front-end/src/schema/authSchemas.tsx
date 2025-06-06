import { z } from "zod";

export const signInSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    email: z.string().email({
      message: "Email must be valid",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Pleasse confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email must be valid",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

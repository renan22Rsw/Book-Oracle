import { z } from "zod";

export const signInSchema = z
  .object({
    username: z.string().min(3, {
      message: "O nome de usuário deve ter pelo menos 3 letras",
    }),
    email: z.string().email({
      message: "O email deve ser válido",
    }),
    password: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres",
    }),
    confirmPassword: z.string().min(8, {
      message: "Por favor, confirme sua senha",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({
    message: "O email deve ser válido",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter pelo menos 8 caracteres",
  }),
});

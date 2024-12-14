import { z } from "zod"

export const RegisterSchema = z
  .object({
    username: z
      .string({ required_error: "Usuário é requirido" })
      .min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
    email: z
      .string({ required_error: "Email é requirido" })
      .email("Endereço de email inválido"),
    password: z
      .string({ required_error: "Senha é requirido" })
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z
      .string({ required_error: "Por favor, confirme sua senha" })
      .min(8, "A confirmação de senha deve ter pelo menos 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas devem coincidir",
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

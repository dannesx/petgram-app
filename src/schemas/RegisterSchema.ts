import { z } from "zod"

export const RegisterSchema = z.object({
    username: z.string().min(3, "O nome de usuário é muito pequeno"),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Sua senha deve possuir pelo menos 8 caracteres"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ['confirmPassword']
})

export type RegisterType = z.infer<typeof RegisterSchema>

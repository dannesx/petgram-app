import { z } from "zod"

export const LoginSchema = z.object({
    username: z.string().min(1, "Usuário é obrigatório"),
    password: z.string().min(1, "Senha é obrigatório")
})

export type LoginType = z.infer<typeof LoginSchema>


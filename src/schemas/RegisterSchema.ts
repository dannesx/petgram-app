import { z } from "zod"

const Schema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas devem coincidir"
})

export type RegisterSchema = z.infer<typeof Schema>
import { z } from "zod"

export const CommentSchema = z.object({
  text: z.string().min(1, "O texto é obrigatório"),
})

export type CommentType = z.infer<typeof CommentSchema>

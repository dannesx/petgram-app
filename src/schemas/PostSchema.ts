import { z } from "zod"

export const PostSchema = z.object({
  imageUrl: z.string().min(1, "Imagem é obrigatória"),
  caption: z.string(),
})

export type PostType = z.infer<typeof PostSchema>

import { z } from "zod"

export const PostSchema = z.object({
  imageUrl: z.custom(),
  caption: z.string(),
})

export type PostSchemaType = z.infer<typeof PostSchema>

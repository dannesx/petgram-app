import { z } from "zod"

export const CommentSchema = z.object({
  text: z.string(),
})

export type CommentSchemaType = z.infer<typeof CommentSchema>

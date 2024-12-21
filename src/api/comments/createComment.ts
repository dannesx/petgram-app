import api from "@/lib/axios"
import type { CommentSchemaType } from "@/schemas/CommentSchema"

export async function createComment(data: CommentSchemaType, postId: string) {
  await api.post(`/comments/${postId}`, data)
}

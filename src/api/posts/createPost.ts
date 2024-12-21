import api from "@/lib/axios"
import type { PostSchemaType } from "@/schemas/PostSchema"

export async function createPost(data: PostSchemaType) {
  console.log(data)
  await api.post("/posts", data)
}

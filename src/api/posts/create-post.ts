import api from "@/lib/axios"
import { queryClient } from "@/lib/react-query"
import type { PostType } from "@/schemas/PostSchema"
import { useMutation } from "@tanstack/react-query"

async function createPost(data: PostType) {
  const response = await api.post("/posts", data)
  return response.data
}

export function useCreatePost() {
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

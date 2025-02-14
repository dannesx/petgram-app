import api from "@/lib/axios"
import { queryClient } from "@/lib/react-query"
import { useMutation } from "@tanstack/react-query"

async function createComment({
  postId,
  text,
}: {
  postId: string
  text: string
}) {
  return api.post(`/comments/${postId}`, { text })
}

export function useCreateComment() {
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

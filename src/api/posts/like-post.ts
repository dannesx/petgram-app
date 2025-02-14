import api from "@/lib/axios"
import { queryClient } from "@/lib/react-query"
import { useMutation } from "@tanstack/react-query"

async function likePost(postId: string) {
  const result = await api.post(`/posts/${postId}/like`)
  return result.data
}

export default function useLikePost() {
  return useMutation({
    mutationFn: likePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

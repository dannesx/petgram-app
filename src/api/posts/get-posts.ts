import api from "@/lib/axios"
import { Post } from "@/types/Post"
import { useQuery } from "@tanstack/react-query"

async function getPosts() {
  const response = await api.get("/posts")
  return response.data
}

export function useGetPosts() {
  return useQuery<Post[]>({ queryKey: ["posts"], queryFn: getPosts })
}

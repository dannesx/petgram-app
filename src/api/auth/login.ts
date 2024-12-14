import api from "@/lib/axios"
import { LoginSchema } from "@/schemas/LoginSchema"

export async function login({ username, password }: LoginSchema) {
  const result = await api.post("/auth", { username, password })
  
  if(result.data) {
    localStorage.setItem("token", result.data.token)
  }
}

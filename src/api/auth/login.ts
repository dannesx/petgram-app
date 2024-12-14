import api from "@/lib/axios"
import { LoginSchemaType } from "@/schemas/LoginSchema"

export async function login(data: LoginSchemaType): Promise<void> {
  const result = await api.post("/auth", data)

  if (result.data?.token) {
    localStorage.setItem("token", result.data.token)
  }
}

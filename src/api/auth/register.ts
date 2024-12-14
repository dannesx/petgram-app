import api from "@/lib/axios"
import { RegisterSchemaType } from "@/schemas/RegisterSchema"

export async function register(data: RegisterSchemaType) {
  await api.post("/users", data)
}

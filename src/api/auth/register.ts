import api from "@/lib/axios";
import { RegisterSchema } from "@/schemas/RegisterSchema";

export async function register({username, email, password}: RegisterSchema){
    await api.post("/users", {username, email, password})
}
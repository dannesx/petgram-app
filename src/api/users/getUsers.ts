import api from "@/lib/axios"

export async function getUsers(){
    const result = await api.get("/users")
    console.log(result.data)
}
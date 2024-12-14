import api from "@/lib/axios";

export async function getPosts() {
    const result = await api.get("/posts")
    console.log(result.data)
}
import api from "@/lib/axios";

export async function getPosts() {
    const result = await api.get("/posts")
    return result.data
}
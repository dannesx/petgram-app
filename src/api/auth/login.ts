import api from "@/lib/axios"

import { useMutation } from "@tanstack/react-query"

async function login(data: any){
    const result = await api.post('/auth', data)

    localStorage.setItem("token", result.data.token)

    window.location.href = "/"
}

export function useLogin() {
    return useMutation({ mutationFn: login })
}
import api from "@/lib/axios"
import { RegisterType } from "@/schemas/RegisterSchema";
import { useMutation } from "@tanstack/react-query";

async function createUser(data: RegisterType){
    const response = await api.post("/users", data)

    console.log(response)
}

export function useCreateUser(){
    return useMutation({ mutationFn: createUser })
}

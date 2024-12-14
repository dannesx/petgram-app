import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RegisterSchemaType } from "@/schemas/RegisterSchema"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas/RegisterSchema"
import { register as registerApi } from "@/api/auth/register"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AxiosError } from "axios"

const Register = () => {
  const navigate = useNavigate()
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  })

  const handleAxiosError = (error: AxiosError) => {
    let errorMessage = "Ocorreu um erro. Tente novamente"
    if (error.response) {
      switch (error.response.status) {
        case 409:
          errorMessage =
            "Usuário já cadastrado. Tente outro nome de usuário e/ou email"
          break
      }
    }
    toast.error(errorMessage)
  }

  async function handleRegister(data: RegisterSchemaType) {
    try {
      await registerApi(data)
      toast.success("Usuário cadastrado com sucesso!", {
        action: {
          label: "Fazer login",
          onClick: () => navigate("/login"),
        },
      })
    } catch (error) {
      console.error(error)
      if (error instanceof AxiosError) {
        handleAxiosError(error)
      }
    }
  }

  return (
    <>
      <Helmet title="Registrar" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Cadastro
        </h1>

        <Form {...form}>
          <form
            className="w-[300px] space-y-2"
            onSubmit={form.handleSubmit(handleRegister)}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplo123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="exemplo@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Nova conta
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-primary font-medium">
                Entrar
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </>
  )
}

export default Register

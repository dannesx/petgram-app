import { useLogin } from "@/api/auth/login"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema, LoginType } from "@/schemas/LoginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
  const { mutateAsync: loginFn } = useLogin()

  const form = useForm<LoginType>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema)
  })

  async function onSubmit(data: LoginType) {
    try {
      await loginFn(data)
      toast.success("Login efetuado com sucesso!")
    } catch (error) {
      if (error instanceof AxiosError) {
        handleAxiosError(error)
      }
    }
  }

  function handleAxiosError(error: AxiosError) {
    switch (error.status) {
      case 401:
        toast.error("Usuário e/ou senha incorretos")
        break
      case 404:
        toast.error("Usuário não encontrado")
        break
      default:
        toast.error("Erro inesperado")
        break
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Login
        </h1>

        <Form {...form}>
          <form
            className="w-[300px] space-y-3"
            onSubmit={form.handleSubmit(onSubmit)}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Não possui conta?{" "}
              <Link to="/signup" className="text-primary font-medium">
                Registrar
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </>
  )
}

export default Login

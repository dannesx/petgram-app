import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { RegisterSchema, RegisterType } from "@/schemas/RegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateUser } from "@/api/users/create-user"
import { toast } from "sonner"

const Register = () => {
  const form = useForm<RegisterType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(RegisterSchema)
  })

  const { mutateAsync: createUserFn } = useCreateUser()

  async function onSubmit(data: RegisterType){
    try {
      await createUserFn(data)
      toast.success("Conta criada com sucesso!")
    } catch (error) {
      toast.error("Erro ao criar usuário")
      console.error(error)
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
          <form className="w-[300px] space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
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

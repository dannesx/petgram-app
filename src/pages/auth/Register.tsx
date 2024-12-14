import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RegisterSchema } from "@/schemas/RegisterSchema"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { register as registerApi } from "@/api/auth/register"
import { toast } from "sonner"

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<RegisterSchema>()

  async function handleRegister(data: RegisterSchema) {
    try {
      await registerApi(data)
      toast.success("Usuário cadastrado com sucesso!", {
        action: {
          label: "Fazer login",
          onClick: () => navigate("/login")
        }
      })
    } catch (error) {
      toast.error("Deu ruim")
    }
  }
  return (
    <>
      <Helmet title="Registrar" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Cadastro
        </h1>

        <form
          className="w-[300px] space-y-3"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="space-y-1">
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              type="text"
              placeholder="exemplo123"
              {...register("username")}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              {...register("email")}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
          </div>

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
      </div>
    </>
  )
}
export default Register

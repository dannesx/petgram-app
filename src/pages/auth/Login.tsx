import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LoginSchemaType } from "@/schemas/LoginSchema"
import { useForm } from "react-hook-form"
import { login } from "@/api/auth/login"
import { toast } from "sonner"
import { AxiosError } from "axios"
import { useEffect } from "react"

const Login = () => {
  const { register, handleSubmit } = useForm<LoginSchemaType>()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.error) {
      toast.error(location.state.error)
    }
  }, [location.state])

  const handleLogin = async (data: LoginSchemaType) => {
    try {
      await login(data)
      navigate("/")
    } catch (error) {
      if (error instanceof AxiosError) {
        handleAxiosError(error)
      }
    }
  }

  const handleAxiosError = (error: AxiosError) => {
    let errorMessage = "Ocorreu um erro. Tente novamente"
    if (error.response) {
      switch (error.response.status) {
        case 404:
          errorMessage = "Usuário não está cadastrado no sistema"
          break
        case 401:
          errorMessage = "Usuário e/ou senhas incorretos. Tente novamente"
          break
      }
    }
    toast.error(errorMessage)
  }

  return (
    <>
      <Helmet title="Login" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Login
        </h1>
        <form
          className="w-[300px] space-y-3"
          onSubmit={handleSubmit(handleLogin)}
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
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
          </div>
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
      </div>
    </>
  )
}

export default Login

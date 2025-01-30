import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { Link, useLocation } from "react-router-dom"
import { toast } from "sonner"
import { useEffect } from "react"

const Login = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.error) {
      toast.error(location.state.error)
    }
  }, [location.state])

  return (
    <>
      <Helmet title="Login" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Login
        </h1>
        <form className="w-[300px] space-y-3">
          <div className="space-y-1">
            <Label htmlFor="username">Usuário</Label>
            <Input id="username" type="text" placeholder="exemplo123" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
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

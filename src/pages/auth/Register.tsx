import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <Helmet title="Registrar" />
      <div>
        <h1 className="text-3xl tracking-tight font-bold text-primary text-center mb-4">
          Cadastro
        </h1>

        <form className="w-[300px] space-y-3">
          <div className="space-y-1">
            <Label htmlFor="username">Usuário</Label>
            <Input id="username" type="text" placeholder="exemplo123" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="exemplo@email.com" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
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

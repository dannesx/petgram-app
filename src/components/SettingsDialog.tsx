import { Label } from "./ui/label"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Save } from "lucide-react"

const SettingsDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Configurações da conta</DialogTitle>
        <DialogDescription>
          Aqui você pode atualizar as configurações da sua conta
        </DialogDescription>
      </DialogHeader>

      <form className="grid grid-cols-4 items-center gap-2 space-y-1">
        <Label htmlFor="username" className="text-right">
          Usuário
        </Label>
        <Input type="text" className="col-span-3" id="username" />

        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input type="email" className="col-span-3" id="email" />

        <Label htmlFor="password" className="text-right">
          Senha
        </Label>
        <Input type="password" className="col-span-3" id="password" />

        <Label htmlFor="confirm-password" className="text-right">
          Confirme sua senha
        </Label>
        <Input type="password" className="col-span-3" id="confirm-password" />

        <Button className="col-start-2 col-span-3">
          <Save />
          Salvar
        </Button>
      </form>
    </DialogContent>
  )
}
export default SettingsDialog

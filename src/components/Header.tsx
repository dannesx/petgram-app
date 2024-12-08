import {
  Bell,
  House,
  LogOut,
  MessageSquareText,
  PawPrint,
  Settings,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import NewPostDialog from "./NewPostDialog"
import SettingsDialog from "./SettingsDialog"
import { Dialog, DialogTrigger } from "./ui/dialog"

const Header = () => {
  return (
    <header className="flex justify-between py-4 mb-2">
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="flex gap-1.5 items-center text-primary font-bold"
        >
          <PawPrint className="h-5 w-5" strokeWidth={2.5} />
          <h1 className="text-xl leading-none">Petgram</h1>
        </Link>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex gap-6">
          <Link
            to="/"
            className="flex text-sm text-muted-foreground gap-1 items-center"
          >
            <House className="h-5 w-5" />
            <span className="leading-none">Página inicial</span>
          </Link>

          <Link
            to="/messages"
            className="flex text-sm text-muted-foreground gap-1 items-center"
          >
            <MessageSquareText className="h-5 w-5" />
            <span className="leading-none">Mensagens</span>
          </Link>

          <Link
            to="/notifications"
            className="flex text-sm text-muted-foreground gap-1 items-center"
          >
            <Bell className="h-5 w-5" />
            <span className="leading-none">Notificações</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-2">
        <NewPostDialog />

        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage />
                <AvatarFallback className="bg-primary text-primary-foreground select-none">
                  DA
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[230px]">
              <DropdownMenuLabel>
                <p>dannesx</p>
                <p className="text-muted-foreground font-light">
                  daniel@email.com
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger className="flex gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Configurações</span>
                </DialogTrigger>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  to="/login"
                  className="text-red-500 dark:text-red-400 cursor-pointer"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SettingsDialog />
        </Dialog>
      </div>
    </header>
  )
}
export default Header

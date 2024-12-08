import { Ellipsis, PenSquare, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger } from "./ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog"

const PostActions = () => {
  return (
    <Dialog>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="link" className="p-0">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right">
            <DropdownMenuItem>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-0 h-6">
                  <PenSquare />
                  Editar
                </Button>
              </DialogTrigger>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="p-0 h-6 text-red-500">
                  <Trash />
                  Apagar
                </Button>
              </AlertDialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </AlertDialog>
    </Dialog>
  )
}
export default PostActions

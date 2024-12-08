import { PawPrint, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const NewPostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" variant="outline">
          <Plus />
          Novo post
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo post</DialogTitle>
          <DialogDescription>Publique uma foto do seu pet!</DialogDescription>
        </DialogHeader>

        <form className="grid grid-cols-4 items-center gap-2 space-y-1">
          <Label htmlFor="imageUrl" className="text-right">
            Imagem
          </Label>
          <Input type="file" className="col-span-3" id="imageUrl" />

          <Label htmlFor="caption" className="text-right">
            Legenda
          </Label>
          <Textarea className="resize-none col-span-3" id="caption"></Textarea>

          <Button className="col-start-2 col-span-3">
            <PawPrint />
            Publicar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default NewPostDialog

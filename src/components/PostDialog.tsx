import { Avatar, AvatarFallback } from "./ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import Comment from "./Comment"
import { Input } from "./ui/input"
import { Heart, MessageSquare, MessageSquarePlus } from "lucide-react"
import { Button } from "./ui/button"

const PostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Ver todos os comentários</DialogTrigger>

      <DialogContent className="max-w-screen-lg p-0">
        <div className="grid grid-cols-[1fr_420px]">
          <img
            src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded aspect-square object-cover h-[620px]"
          />

          <aside className="flex flex-col justify-between p-8">
            <header className="space-y-2">
              <div className="flex gap-2 items-center">
                <Avatar className="h-8 w-8 text-xs">
                  <AvatarFallback className="bg-primary">PA</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">paw_prince</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                ipsam. <p className="text-xs text-muted-foreground">47 min</p>
              </p>
            </header>

            <ul className="space-y-2 h-[350px] overflow-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <li>
                <Comment username="admin">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  unde quos aut blanditiis ullam eligendi quod, voluptates,
                  architecto eius repudiandae explicabo error cum voluptate
                  nihil minima fuga repellendus voluptatibus inventore.
                </Comment>
              </li>

              <li>
                <Comment username="meowstatic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis non minima, laboriosam amet, tempora sunt vel sint
                  repellat consequatur eaque qui.
                </Comment>
              </li>
            </ul>

            <div className="space-y-3">
              <div className="flex gap-3 text-primary">
                <div className="flex gap-1">
                  <Heart className="h-6 w-6" />
                  <span className="font-medium tracking-tight">376</span>
                </div>
                <div className="flex gap-1">
                  <MessageSquare className="h-6 w-6" />
                  <span className="font-medium tracking-tight">53</span>
                </div>
              </div>

              <form className="flex items-center space-x-2">
                <Input type="text" placeholder="Adicionar comentário" />
                <Button size="icon" className="flex-shrink-0">
                  <MessageSquarePlus />
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default PostDialog

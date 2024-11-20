import { Heart, MessageSquare, MessageSquarePlus } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import PostDialog from "./PostDialog"

const Post = () => {
  return (
    <div className="col-start-2 col-span-2 space-y-2">
      <img
        src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded aspect-square object-cover"
      />

      <div className="flex justify-between items-center">
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

        <p className="text-xs text-muted-foreground font-medium">há 47 min</p>
      </div>

      <p>
        <span className="text-primary font-bold tracking-tight">
          paw_prince
        </span>{" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ipsam.{" "}
      </p>
      <Button variant="link" className="p-0 h-auto">
        <PostDialog />
      </Button>

      <form className="flex items-center space-x-2">
        <Input type="text" placeholder="Adicionar comentário" />
        <Button size="icon" className="flex-shrink-0">
          <MessageSquarePlus />
        </Button>
      </form>
    </div>
  )
}
export default Post

import { Avatar, AvatarFallback } from "./ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import Comment from "./Comment"
import { Input } from "./ui/input"
import { Heart, MessageSquare, MessageSquarePlus } from "lucide-react"
import { Button } from "./ui/button"
import type PostInterface from "@/types/Post"

type Props = {
  data: PostInterface
}

const PostDialog = ({ data: post }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>Ver todos os comentários</DialogTrigger>

      <DialogContent className="max-w-screen-lg p-0">
        <div className="grid grid-cols-[1fr_420px]">
          <img
            src={post.imageUrl}
            alt={post.caption}
            className="rounded aspect-square object-cover h-[620px]"
          />

          <aside className="flex flex-col justify-between p-8">
            <header className="space-y-2">
              <div className="flex gap-2 items-center">
                <Avatar className="h-8 w-8 text-xs">
                  <AvatarFallback className="bg-primary">
                    {post.user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">
                  {post.user.username}
                </span>
              </div>
              <p>
                {post.caption}{" "}
                <p className="text-xs text-muted-foreground">47 min</p>
              </p>
            </header>

            <div className="space-y-2 h-[350px] overflow-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {post.comments &&
                post.comments.map((comment) => (
                  <Comment key={comment.id} username={comment.user.username}>
                    {comment.text}
                  </Comment>
                ))}
            </div>

            <div className="space-y-3">
              <div className="flex gap-3 text-primary">
                <div className="flex gap-1">
                  <Heart className="h-6 w-6" />
                  <span className="font-medium tracking-tight">
                    {post.likeCount}
                  </span>
                </div>
                <div className="flex gap-1">
                  <MessageSquare className="h-6 w-6" />
                  <span className="font-medium tracking-tight">
                    {post.comments.length}
                  </span>
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

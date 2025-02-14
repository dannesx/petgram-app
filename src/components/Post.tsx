import { Heart, MessageSquare } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Button } from "./ui/button"
import PostDialog from "./PostDialog"
import PostActions from "./PostActions"
import type { Post } from "@/types/Post"
import CommentForm from "./CommentForm"
import useLikePost from "@/api/posts/like-post"
import { useState } from "react"

const Post = ({ data: post }: { data: Post }) => {
  const { mutateAsync: likePostFn } = useLikePost()
  const [liked, setLiked] = useState(false)

  function handleLikePost() {
    likePostFn(post.id)
    setLiked((prev) => !prev)
  }

  return (
    <div className="col-start-2 col-span-2 space-y-2">
      <img
        src={post.imageUrl}
        alt={post.caption}
        className="rounded aspect-square object-cover"
      />

      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-primary">
          <div className="flex gap-1 cursor-pointer" onClick={handleLikePost}>
            <Heart className="h-6 w-6" fill={liked ? "#f59e0b" : "white"} />
            <span className="font-medium tracking-tight">{post.likeCount}</span>
          </div>
          <div className="flex gap-1">
            <MessageSquare className="h-6 w-6" />
            <span className="font-medium tracking-tight">
              {post.comments.length}
            </span>
          </div>
        </div>

        <PostActions />
      </div>

      <p>
        <span className="text-primary font-bold tracking-tight">
          {post.user.username}
        </span>{" "}
        {post.caption}{" "}
        <p className="text-xs text-muted-foreground font-medium">
          {formatDistanceToNow(post.createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </p>
      <Button variant="link" className="p-0 h-auto">
        <PostDialog postId={post.id} />
      </Button>

      <CommentForm postId={post.id} />
    </div>
  )
}
export default Post

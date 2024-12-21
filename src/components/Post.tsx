import { Heart, MessageSquare, MessageSquarePlus } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import PostDialog from "./PostDialog"
import PostActions from "./PostActions"
import PostInterface from "@/types/Post"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CommentSchema, CommentSchemaType } from "@/schemas/CommentSchema"
import { toast } from "sonner"
import { createComment } from "@/api/comments/createComment"

type Props = {
  data: PostInterface
}

const Post = ({ data: post }: Props) => {
  const form = useForm<CommentSchemaType>({
    resolver: zodResolver(CommentSchema),
  })

  async function handleComment(data: CommentSchemaType) {
    try {
      await createComment(data, post.id)
      toast.success("Comentário feito com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao comentar no post")
    }
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
          <div className="flex gap-1">
            <Heart className="h-6 w-6" />
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
        <p className="text-xs text-muted-foreground font-medium">há 47 min</p>
      </p>
      <Button variant="link" className="p-0 h-auto">
        <PostDialog data={post} />
      </Button>

      <Form {...form}>
        <form
          className="flex items-center space-x-2"
          onSubmit={form.handleSubmit(handleComment)}
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Adicionar comentário" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button size="icon" className="flex-shrink-0">
            <MessageSquarePlus />
          </Button>
        </form>
      </Form>
    </div>
  )
}
export default Post

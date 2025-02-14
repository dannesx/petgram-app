import { MessageSquarePlus } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CommentSchema, CommentType } from "@/schemas/CommentSchema"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { useCreateComment } from "@/api/comments/create-comment"
import { toast } from "sonner"

type Props = {
  postId: string
}

const CommentForm = ({ postId }: Props) => {
  const { mutateAsync: createCommentFn } = useCreateComment()
  const form = useForm<CommentType>({
    defaultValues: {
      text: "",
    },
    resolver: zodResolver(CommentSchema),
  })

  async function onSubmit(data: CommentType) {
    try {
      await createCommentFn({ postId, text: data.text })
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Erro ao adicionar comentário")
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex items-center space-x-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Adicionar comentário"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          size="icon"
          className="flex-shrink-0"
          disabled={form.formState.isSubmitting}
        >
          <MessageSquarePlus />
        </Button>
      </form>
    </Form>
  )
}
export default CommentForm

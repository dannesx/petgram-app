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
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import { PostSchema, PostType } from "@/schemas/PostSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useCreatePost } from "@/api/posts/create-post"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { useState } from "react"

const NewPostDialog = () => {
  const { mutateAsync: createPostFn } = useCreatePost()
  const [open, setOpen] = useState(false)
  const form = useForm<PostType>({
    defaultValues: {
      imageUrl: "",
      caption: "",
    },
    resolver: zodResolver(PostSchema),
  })

  async function onSubmit(data: PostType) {
    console.log(data)
    try {
      await createPostFn(data)
      setOpen(false)
      toast.success("Post criado com sucesso!")
    } catch (error) {
      toast.error("Erro ao criar post")
      console.error(error)
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const base64string = reader.result as string
      form.setValue("imageUrl", base64string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

        <Form {...form}>
          <form
            className="grid grid-cols-4 items-center gap-2 space-y-1"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="imageUrl"
              render={() => (
                <FormItem className="col-span-4 grid grid-cols-4 items-center gap-2 ">
                  <FormLabel className="text-right">Imagem</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="col-span-3"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage className="col-start-2 col-span-3" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem className="col-span-4 grid grid-cols-4 items-center gap-2 ">
                  <FormLabel className="text-right">Legenda</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none col-span-3"
                      {...field}
                    ></Textarea>
                  </FormControl>
                  <FormMessage className="col-start-2 col-span-3" />
                </FormItem>
              )}
            />

            <Button
              className="col-start-2 col-span-3"
              disabled={form.formState.isSubmitting}
            >
              <PawPrint />
              Publicar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default NewPostDialog

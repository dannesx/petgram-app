import { PawPrint, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import { PostSchema, PostSchemaType } from "@/schemas/PostSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { createPost } from "@/api/posts/createPost"
import { AxiosError } from "axios"
import { toast } from "sonner"

const NewPostDialog = () => {
  const form = useForm<PostSchemaType>({
    resolver: zodResolver(PostSchema),
  })

  const handleAxiosError = (error: AxiosError) => {
    let errorMessage = "Ocorreu um erro. Tente novamente"
    if (error.response) {
      switch (error.response.status) {
        case 413:
          errorMessage =
            "O arquivo é muito grande! Por favor, selecione um arquivo menor"
          break
      }
    }
    toast.error(errorMessage)
  }

  async function handleNewPost(data: PostSchemaType) {
    try {
      await createPost(data)
      toast.success("Post publicado com sucesso!")
    } catch (error) {
      if (error instanceof AxiosError) {
        handleAxiosError(error)
      }
    }
  }

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleNewPost)}>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-2">
                  <FormLabel className="text-right">Imagem</FormLabel>
                  <FormControl className="col-span-3">
                    <Input
                      type="file"
                      onChange={(event) => {
                        const file = event.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.readAsDataURL(file) // Converte o arquivo para Base64
                          reader.onload = () => {
                            field.onChange(reader.result) // Envia a string Base64 ao React Hook Form
                          }
                          reader.onerror = (error) =>
                            console.error("Erro ao ler o arquivo:", error)
                        }
                      }}
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
                <FormItem className="grid grid-cols-4 items-center gap-2">
                  <FormLabel className="text-right">Legenda</FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea className="resize-none" {...field}></Textarea>
                  </FormControl>
                  <FormMessage className="col-start-2 col-span-3" />
                </FormItem>
              )}
            />

            <DialogFooter className="grid grid-cols-4 mt-4">
              <Button className="col-start-2 col-span-3">
                <PawPrint />
                Publicar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default NewPostDialog

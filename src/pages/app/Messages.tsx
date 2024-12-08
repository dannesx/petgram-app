import Message from "@/components/messages/Message"
import MessageAccount from "@/components/messages/MessageAccount"
import MessageAvatar from "@/components/messages/MessageAvatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { Helmet } from "react-helmet-async"

const messages = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt.",
  "Ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam.",
  "Quis nostrud exercitation ullamco.",
  "Laboris nisi ut aliquip ex ea commodo consequat.",
]

const Messages = () => {
  return (
    <>
      <Helmet title="Mensagens" />

      <section className="grid grid-cols-4 col-span-3 h-[calc(100vh-120px)] gap-8">
        <div className="border rounded-lg">
          <ul>
            {["bunny_hops", "admin", "john_doe", "alice"].map((user) => (
              <li key={user}>
                <MessageAccount username={user} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col border rounded-lg col-span-3">
          <header className="p-4 border-b flex gap-2 items-center">
            <MessageAvatar username="bunny_hops"/>
            <h2 className="font-medium tracking-tight font-sans">bunny_hops</h2>
          </header>
          <div className="flex flex-col gap-4 p-4 overflow-y-auto grow max-h-[calc(100vh-220px)]">
            {Array.from({ length: 20 }).map((_, index) => (
              <Message
                key={index}
                username={index % 2 === 0 ? "bunny_hops" : "dannesx"}
                mine={index % 2 === 1}
              >
                {messages[Math.floor(Math.random() * messages.length)]}
              </Message>
            ))}
          </div>

          <form className="border-t p-1">
            <div className="flex">
              <Input
                className="border-none outline-none focus-visible:ring-transparent"
                placeholder="Escreva sua mensagem..."
              />

              <Button size="icon">
                <Send />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Messages

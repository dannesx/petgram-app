import Trendings from "@/components/Trendings"
import { Helmet } from "react-helmet-async"

const Messages = () => {
  return (
    <>
      <Helmet title="Mensagens" />
      <main className="grid grid-cols-4 gap-10">
        <section className="col-span-3">
          <h1>Messages</h1>
        </section>

        <Trendings />
      </main>
    </>
  )
}
export default Messages

import Trendings from "@/components/Trendings"
import { Helmet } from "react-helmet-async"

const Notifications = () => {
  return (
    <>
      <Helmet title="Notificações" />
      <main className="grid grid-cols-4 gap-10">
        <section className="col-span-3">
          <h1>Notifications</h1>
        </section>

        <Trendings />
      </main>
    </>
  )
}
export default Notifications

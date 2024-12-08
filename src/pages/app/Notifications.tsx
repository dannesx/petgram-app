import Notification from "@/components/Notification"
import Trendings from "@/components/Trendings"
import { Helmet } from "react-helmet-async"

const Notifications = () => {
  return (
    <>
      <Helmet title="Notificações" />
      <main className="grid grid-cols-4 gap-10">
        <section className="col-span-3 space-y-3">
          <Notification username="bunny_hops" type="like">
            curtiu o seu comentário
          </Notification>
          <Notification username="john_doe" type="like">
            curtiu o seu post
          </Notification>
          <Notification username="bunny_hops" type="comment">
            comentou no seu post
          </Notification>
          <Notification username="paw_prince" type="follow">
            começou a te seguir
          </Notification>
        </section>

        <Trendings />
      </main>
    </>
  )
}
export default Notifications

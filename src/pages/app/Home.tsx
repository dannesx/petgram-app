import Post from "@/components/Post"
import Trendings from "@/components/Trendings"
import { Helmet } from "react-helmet-async"

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <main className="grid grid-cols-4 gap-10 items-start">
        <section className="grid col-span-3 grid-cols-4 space-y-6">
          <Post />
          <Post />
          <Post />
        </section>

        <Trendings />
      </main>
    </>
  )
}
export default Home

import { getPosts } from "@/api/posts/getPosts"
import Post from "@/components/Post"
import Trendings from "@/components/Trendings"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const Home = () => {
  useEffect(() => {
    async function fetchPosts(){
      await getPosts()
    }
    fetchPosts()
  }, [])
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

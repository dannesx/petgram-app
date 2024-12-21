import { getPosts } from "@/api/posts/getPosts"
import Post from "@/components/Post"
import Trendings from "@/components/Trendings"
import PostInterface from "@/types/Post"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const [posts, setPosts] = useState<PostInterface[]>([])
  useEffect(() => {
    async function fetchPosts() {
      setPosts(await getPosts())
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Helmet title="Home" />
      <main className="grid grid-cols-4 gap-10 items-start">
        <section className="grid col-span-3 grid-cols-4 space-y-6">
          {posts && posts.map((post) => <Post key={post.id} data={post} />)}
          {posts.length === 0 && (
            <p className="col-span-4 text-center text-muted-foreground">
              Nenhum post encontrado
            </p>
          )}
        </section>

        <Trendings />
      </main>
    </>
  )
}
export default Home

import { useGetPosts } from "@/api/posts/get-posts"
import Post from "@/components/Post"
import Trendings from "@/components/Trendings"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const { data: posts, isSuccess } = useGetPosts()
  return (
    <>
      <Helmet title="Home" />
      <main className="grid grid-cols-4 gap-10 items-start">
        <section className="grid col-span-3 grid-cols-4 space-y-6">
          {isSuccess && posts.map((post) => <Post key={post.id} data={post} />)}
          {isSuccess && posts.length === 0 && (
            <p className="text-center text-muted-foreground col-span-4">
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

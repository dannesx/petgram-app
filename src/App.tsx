import { RouterProvider } from "react-router-dom"
import router from "./Routes"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"

const App = () => {
  return (
    <HelmetProvider >
      <Helmet titleTemplate="%s · Petgram"/>
      <RouterProvider router={router} />
      <Toaster richColors/>
    </HelmetProvider>
  )
}
export default App

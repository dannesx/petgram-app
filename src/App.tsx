import { RouterProvider } from "react-router-dom"
import router from "./Routes"
import { Helmet, HelmetProvider } from "react-helmet-async"

const App = () => {
  return (
    <HelmetProvider >
      <Helmet titleTemplate="%s · Petgram"/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
export default App

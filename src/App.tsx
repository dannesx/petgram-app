import { RouterProvider } from "react-router-dom"
import router from "./Routes"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"

const App = () => {
  return (
    <HelmetProvider >
      <Helmet titleTemplate="%s · Petgram"/>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster richColors/>
    </HelmetProvider>
  )
}
export default App

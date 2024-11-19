import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <Header />
      <Outlet />
    </div>
  )
}
export default AppLayout

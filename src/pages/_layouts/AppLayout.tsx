import Header from "@/components/Header"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const AppLayout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const isAuthorized = localStorage.getItem("token")

    if(!isAuthorized){
      navigate("/login", { replace: true, state: { error: "Sessão expirada. Faça login novamente." } })
    }
  }, [])
  return (
    <div className="container mx-auto px-4 max-w-screen-xl min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
export default AppLayout

import { PawPrint } from "lucide-react"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="relative p-8">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dog"
          className="h-screen object-cover w-full scale-x-[-1] absolute top-0 left-0 -z-10"
        />
        <div className="flex flex-col justify-between h-full">
          <header className="flex items-center gap-2 text-white select-none">
            <PawPrint className="h-7 w-7" strokeWidth={3} />
            <h1 className="text-3xl tracking-tight font-bold">Petgram.com</h1>
          </header>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout

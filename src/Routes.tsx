import { createBrowserRouter } from "react-router-dom"
import { AppLayout, AuthLayout } from "./pages/_layouts"
import { LoginPage, RegisterPage } from "./pages/auth"
import { HomePage, MessagesPage, NotificationsPage } from "./pages/app"

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
])

export default router

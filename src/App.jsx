import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <Homepage />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App

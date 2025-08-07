import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Worldd</div>
  }
])

const App = () => {
  { console.log(<RouterProvider router={router} />) }
}
export default App

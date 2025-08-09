import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    // <div>
    //   <RouterProvider router={router} />
    // </div>
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage";
import Login from "../pages/loginForm";
import Register from "../pages/registerForm";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Login form="login" />} />
          <Route path="register" element={<Register form="register" />} />
          <Route path="home" element={<Homepage />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

import { BrowserRouter, Routes, Route } from "react-router";

// pages
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage";
import Login from "../pages/loginForm";
import Register from "../pages/registerForm";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

// state
import { useState } from "react";

// data
import userData from "../utils/dataUser";


const App = () => {
  const [user, setUser] = useState(null); // belum login

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<Layout user={user} setUser={setUser} userData={userData} />}>
          {/* Child routes */}
          <Route path="login" element={<Login form="login" setUser={setUser} />} />
          <Route path="register" element={<Register form="register" />} />
          <Route index path="/" element={<Homepage />} />
          <Route path="profile" element={<Profile user={user} setUser={setUser} userData={userData} />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

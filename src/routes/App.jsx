import { BrowserRouter, Routes, Route } from "react-router";

// pages
import Layout from "../pages/Layout";
import Homepage from "../pages/Homepage";
import Login from "../pages/loginForm";
import Register from "../pages/registerForm";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import useUsersStore from "../store/usersStore";
import { useEffect } from "react";

const App = () => {

  const restoreUser = useUsersStore((state) => state.restoreUser);

  useEffect(() => {
    restoreUser(); // fetch ulang data user setelah refresh
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route path="login" element={<Login form="login" />} />
          <Route path="register" element={<Register form="register" />} />
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

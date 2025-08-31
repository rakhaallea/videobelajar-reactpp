import { Outlet } from "react-router"
import Header from "../components/sections/Navbar/Header"

const Layout = ({ user, setUser, userData }) => {
    return (
        <>
            <Header user={user} setUser={setUser} userData={userData} />
            <Outlet />
        </>
    )
}

export default Layout
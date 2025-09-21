import logoNavbar from '../../../assets/icon/logo_mobile.png';
import { IoMdMenu } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import useUsersStore from "../../../store/usersStore";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const currentUser = useUsersStore((state) => state.currentUser);
    const logout = useUsersStore((state) => state.logout);

    const logOut = () => {
        logout();
        navigate("/login");
        setIsOpen(false);
    };

    const homepage = (e) => {
        e.preventDefault();
        setIsOpen(false);
        navigate("/");
    };

    const profile = (e) => {
        e.preventDefault();
        setIsOpen(false);
        navigate("/profile");
    };

    const hideMenu = location.pathname === "/login" || location.pathname === "/register";

    return (
        <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white fixed top-0 left-0 right-0 z-50">
            <img src={logoNavbar} alt="video belajar logo" onClick={homepage} />

            {!hideMenu && (
                <>
                    <IoMdMenu size={30} onClick={() => setIsOpen(!isOpen)} className="md:hidden" />
                    <ul className="hidden md:flex items-center gap-8">
                        {currentUser ? (
                            <>
                                <li><a href="#">Kategori</a></li>
                                <li>
                                    <button onClick={() => setIsOpen(!isOpen)}>
                                        <img src={currentUser.img} className="w-[44px] rounded-lg" alt="" />
                                    </button>
                                </li>
                            </>
                        ) : (
                            <div className="hidden md:flex gap-4">
                                <Link to="/login"><button className="btn primary">Login</button></Link>
                                <Link to="/register"><button className="btn btn-register">Register</button></Link>
                            </div>
                        )}
                    </ul>
                </>
            )}

            <nav className={`${isOpen ? "flex" : "hidden"} flex-col absolute top-[64px] w-full right-0 bg-white shadow-lg rounded-lg`}>
                {currentUser ? (
                    <>
                        <a href="#" className="link-nav md:hidden">Kategori</a>
                        <a href="/profile" className="link-nav" onClick={profile}>Profile Saya</a>
                        <a href="#" className="link-nav">Kelas Saya</a>
                        <a href="#" className="link-nav">Pesanan Saya</a>
                        <button className="flex items-center gap-2 text-red-500" onClick={logOut}>
                            <p>Keluar</p>
                            <IoExitOutline size={24} />
                        </button>
                    </>
                ) : (
                    <>
                        <a href="#" className="link-nav md:hidden">Kategori</a>
                        <div className="flex gap-4 py-4 px-3">
                            <Link to="/login"><button className="btn primary">Login</button></Link>
                            <Link to="/register"><button className="btn btn-register">Register</button></Link>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;

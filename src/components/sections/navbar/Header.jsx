import logoNavbar from '../../../assets/icon/logo_mobile.png';
import iconProfile from '../../../assets/icon/jess-icon.png';

import { IoMdMenu } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

// React State
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const logOut = () => {
        navigate("/"); // pindah ke page login
        setIsOpen(!isOpen);
    };

    // cek apakah sedang di /login atau /register
    const hideMenu = location.pathname === "/" || location.pathname === "/register";

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='@container py-[16px] px-[24px] border-t-1 border-b-1 border-amber-50 shadow-sm flex justify-between items-center md:px-[120px] fixed top-0 left-0 right-0 z-50 bg-white'>
            <img src={logoNavbar} alt="video belajar logo" />
            {!hideMenu && (
                <>
                    <IoMdMenu size={30} onClick={handleMenuClick} className='md:hidden' />
                    <ul className='hidden md:flex items-center gap-[32px] text-[16px] font-medium leading-[1.4] tracking-[0.2] text-secondary-light'>
                        <li><a href="#" className='text-dark-secondary text-[16px]'>Kategori</a></li>
                        <li>
                            <button className='cursor-pointer flex items-center' onClick={handleMenuClick}>
                                <img src={iconProfile} className='w-[44px] rounded-[10px]' alt="" />
                            </button>
                        </li>
                    </ul>
                </>
            )}


            <nav className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-[64px] w-full right-0 md:w-[200px] md:right-30 items-start bg-white shadow-lg rounded-lg z-10 md:py-[4px] md:rounded-b-xl overflow-hidden`}>
                <a href="#" className='link-nav md:hidden'>Kategori</a>
                <a href="#" className='link-nav'>Profile Saya</a>
                <a href="#" className='link-nav'>Kelas Saya</a>
                <a href="#" className='link-nav'>Pesanan Saya</a>
                <button className='flex items-center gap-2 text-red-500 cursor-pointer' onClick={logOut}>
                    <p className='text-[16px] font-medium leading-[1.4] tracking-[0.2]'>Keluar</p>
                    <IoExitOutline size={24} />
                </button>
            </nav>
        </header>
    )
}

export default Header
import logoNavbar from '../../../assets/icon/logo_mobile.png';
import { IoMdMenu } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

// React State
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='@container py-[16px] px-[24px] border-t-1 border-b-1 border-amber-50 shadow-lg flex justify-between items-center relative'>
            <img src={logoNavbar} alt="video belajar logo" />
            <IoMdMenu size={30} onClick={handleMenuClick} />

            <nav className={`${isOpen ? 'block' : 'hidden'} flex flex-col absolute top-[64px] right-0 left-0 items-start bg-white shadow-lg rounded-lg z-10`}>
                <a href="#" className='link-nav'>Kategori</a>
                <a href="#" className='link-nav'>Profile Saya</a>
                <a href="#" className='link-nav'>Kelas Saya</a>
                <a href="#" className='link-nav'>Pesanan Saya</a>
                <button className='flex items-center gap-2 text-red-500 '>
                    <p className='text-[16px] font-medium leading-[1.4] tracking-[0.2]'>Keluar</p>
                    <IoExitOutline size={24} />
                </button>
            </nav>
        </header>
    )
}

export default Header
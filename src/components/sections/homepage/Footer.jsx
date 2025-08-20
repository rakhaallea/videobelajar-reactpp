import logoFooter from "../../../assets/icon/logo_mobile.png"

// Fontawesome Stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// React Icons
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { useState } from 'react';

const Footer = () => {
    const [isOpen, setIsOpen] = useState({
        kategori: false,
        perusahaan: false,
        komunitas: false,
    });

    const toggleMenu = (menu) => {
        setIsOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <>
            <footer className="flex flex-col p-[20px] gap-[16px] md:py-[60px] md:px-[120px] bg-white border-t border-other">
                <div className="flex flex-col md:flex-row md:justify-between gap-[16px]">
                    <header className="flex flex-col gap-[16px] justify-start items-start md:w-[352px]">
                        <img src={logoFooter} alt="logo" />
                        <div className="flex flex-col gap-[8px] md:gap-[12px]">
                            <p className="font-bold text-sm md:text-[16px] leading-[1.4] tracking-[0.2] pr-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">+62-877-7123-1234</p>
                        </div>
                    </header>
                    <main className="flex flex-col md:flex-row gap-[12px] md:gap-[48px]">
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]" onClick={() => toggleMenu('kategori')}>
                                <p className="font-bold">Kategori</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className={`${isOpen.kategori ? 'flex' : 'hidden'} md:flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]`}>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Digital & Teknologi</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Pemasaran</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Manajemen Bisnis</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Pengembangan Diri</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Desain</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]" onClick={() => toggleMenu('perusahaan')}>
                                <p className="font-bold">Perusahaan</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className={`${isOpen.perusahaan ? 'flex' : 'hidden'} md:flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]`}>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Tentang Kami</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">FAQ</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Kebijakan Privasi</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Ketentuan Layanan</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Bantuan</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]" onClick={() => toggleMenu('komunitas')}>
                                <p className="font-bold">Komunitas</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className={`${isOpen.komunitas ? 'flex' : 'hidden'} md:flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]`}>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Tips Sukses</li>
                                <li className="cursor-pointer leading-[1.4] tracking-[0.2] text-dark-secondary hover:text-tertiary duration-150">Blog</li>
                            </ul>
                        </div>
                    </main>
                </div>
                <div className="diveder"></div>
                <div className="flex flex-col md:flex-row md:justify-between gap-[16px]">
                    <div className="socials flex justify-start items-center gap-[15px] md:order-2">
                        <a href="#" className="social-link"><FaLinkedinIn />
                        </a>
                        <a href="#" className="social-link"><FaFacebookF /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                        <a href="#" className="social-link"><FaTwitter /></a>
                    </div>
                    <p className="pr-2 md:order-1 text-dark-secondary text-[16px]">@2023 Gerobak Sayur All Rights Reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
import logoFooter from "../../../assets/icon/logo_mobile.png"

// Fontawesome Stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// React Icons
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col p-[20px] gap-[16px] bg-white border-t border-other">
                <div className="flex flex-col gap-[16px]">
                    <header className="flex flex-col gap-[16px] items-start">
                        <img src={logoFooter} alt="logo" />
                        <div className="flex flex-col gap-[8px]">
                            <p className="font-bold text-sm leading-[1.4] tracking-[0.2] pr-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">+62-877-7123-1234</p>
                        </div>
                    </header>
                    <main className="flex flex-col gap-[12px]">
                        <a className="flex justify-between items-center gap-[12px]">
                            <p className="font-bold">Kategori</p>
                            <FontAwesomeIcon icon={faAngleRight} className="text-secondary-light" />
                        </a>
                        <a className="flex justify-between items-center gap-[12px]">
                            <p className="font-bold">Perushaan</p>
                            <FontAwesomeIcon icon={faAngleRight} className="text-secondary-light" />
                        </a>
                        <a className="flex justify-between items-center gap-[12px]">
                            <p className="font-bold">Komunitas</p>
                            <FontAwesomeIcon icon={faAngleRight} className="text-secondary-light" />
                        </a>
                    </main>
                </div>
                <div className="diveder"></div>
                <div className="flex flex-col gap-[16px]">
                    <div className="socials flex justify-start items-center gap-[15px]">
                        <a href="#" className="social-link"><FaLinkedinIn />
                        </a>
                        <a href="#" className="social-link"><FaFacebookF /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                        <a href="#" className="social-link"><FaTwitter /></a>
                    </div>
                    <p className="pr-2">@2023 Gerobak Sayur All Rights Reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
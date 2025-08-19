import logoFooter from "../../../assets/icon/logo_mobile.png"

// Fontawesome Stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// React Icons
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col p-[20px] gap-[16px] md:py-[60px] md:px-[120px] bg-white border-t border-other">
                <div className="flex flex-col md:flex-row md:justify-between gap-[16px]">
                    <header className="flex flex-col gap-[16px] items-start">
                        <img src={logoFooter} alt="logo" />
                        <div className="flex flex-col gap-[8px] md:gap-[12px">
                            <p className="font-bold text-sm leading-[1.4] tracking-[0.2] pr-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p className="font-light text-sm leading-[1.4] tracking-[0.2] pr-2">+62-877-7123-1234</p>
                        </div>
                    </header>
                    <main className="flex flex-col md:flex-row gap-[12px] md:gap-[48px]">
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]">
                                <p className="font-bold">Kategori</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className="flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]">
                                <li>Digital & Teknologi</li>
                                <li>Pemasaran</li>
                                <li>Manajemen Bisnis</li>
                                <li>Pengembangan Diri</li>
                                <li>Desain</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]">
                                <p className="font-bold">Perusahaan</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className="flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]">
                                <li>Tentang Kami</li>
                                <li>FAQ</li>
                                <li>Kebijakan Privasi</li>
                                <li>Ketentuan Layanan</li>
                                <li>Bantuan</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h3 className="flex flex-row justify-between items-center gap-[12px]">
                                <p className="font-bold">Komunitas</p>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="inline-block md:opacity-0 text-secondary-light"
                                />
                            </h3>
                            <ul className="flex flex-col gap-[8px] text-secondary-light text-sm leading-[1.4] tracking-[0.2]">
                                <li>Tips Sukses</li>
                                <li>Blog</li>
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
                    <p className="pr-2 md:order-1">@2023 Gerobak Sayur All Rights Reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
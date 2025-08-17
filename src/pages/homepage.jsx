import imgCourse from "../assets/course_3.jpg"
import logoFooter from "../assets/icon/logo_mobile.png"
import iconPofile from "../assets/icon/icon_1.png"

// Fontawesome Stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// React Icons
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";





const homepage = () => {
    return (
        <>
            <div className="@container py-[28px] px-[20px] flex flex-col gap-[24px] bg-[#FFFDF3]">
                <section className="hero banner relative">
                    <div className="bg-dark-transparant w-full h-full absolute rounded-xl -z-0"></div>
                    <h1 className="title z-1">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <p className="text z-1">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <button className="btn-cta z-1">
                        Temukan Video Course untuk Dipelajari!
                    </button>
                </section>

                <section className="cards">
                    <header className="cards-header">
                        <h1 className="title">
                            Koleksi Video Pembelajaran Unggulan
                        </h1>
                        <p className="text">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </header>
                    <div className="card-navigation overflow-scroll" >
                        <ul className="nav-items">
                            <li className="nav-item active">Semua Kelas</li>
                            <li className="nav-item">Pemasaran</li>
                            <li className="nav-item">Desain</li>
                            <li className="nav-item">Pengembangan Diri</li>
                        </ul>
                    </div>
                    <div className="cards-content flex flex-col gap-[20px]">
                        <div className="card">
                            <main className="card-content">
                                <img src={imgCourse} alt="" className="card-image flex-2/5" />

                                <div className="desc flex flex-col gap-[8px]">
                                    <h1 className="title">
                                        Big 4 Auditor Financial Analyst
                                    </h1>
                                    <div className="profile">
                                        <img src={iconPofile} alt="" className="icon-image" />
                                        <div className="flex flex-col justify-center">
                                            <h1 className="text-sm font-semibold">Jenna Ortega</h1>
                                            <p className="font-thin">Senior Accountant</p>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="card-footer flex justify-between items-center">
                                <div className="ratings flex gap-[8px] items-center">
                                    <div className="stars">
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                    </div>
                                    <div className="reviews underline flex items-center gap-[4px]">
                                        <p className="text-sm text-dark-secondary">4.5 (86)</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p className="text-xl font-bold text-primary">Rp 300K</p>
                                </div>
                            </footer>
                        </div>
                        <div className="card">
                            <main className="card-content">
                                <img src={imgCourse} alt="" className="card-image flex-2/5" />

                                <div className="desc flex flex-col gap-[8px]">
                                    <h1 className="title">
                                        Big 4 Auditor Financial Analyst
                                    </h1>
                                    <div className="profile">
                                        <img src={iconPofile} alt="" className="icon-image" />
                                        <div className="flex flex-col justify-center">
                                            <h1 className="text-sm font-semibold">Jenna Ortega</h1>
                                            <p className="font-thin">Senior Accountant</p>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="card-footer flex justify-between items-center">
                                <div className="ratings flex gap-[8px] items-center">
                                    <div className="stars">
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                    </div>
                                    <div className="reviews underline flex items-center gap-[4px]">
                                        <p className="text-sm text-dark-secondary">4.5 (86)</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p className="text-xl font-bold text-primary">Rp 300K</p>
                                </div>
                            </footer>
                        </div>
                        <div className="card">
                            <main className="card-content">
                                <img src={imgCourse} alt="" className="card-image flex-2/5" />

                                <div className="desc flex flex-col gap-[8px]">
                                    <h1 className="title">
                                        Big 4 Auditor Financial Analyst
                                    </h1>
                                    <div className="profile">
                                        <img src={iconPofile} alt="" className="icon-image" />
                                        <div className="flex flex-col justify-center">
                                            <h1 className="text-sm font-semibold">Jenna Ortega</h1>
                                            <p className="font-thin">Senior Accountant</p>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="card-footer flex justify-between items-center">
                                <div className="ratings flex gap-[8px] items-center">
                                    <div className="stars">
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                        <FontAwesomeIcon icon={faStar} className="text-other" />
                                    </div>
                                    <div className="reviews underline flex items-center gap-[4px]">
                                        <p className="text-sm text-dark-secondary">4.5 (86)</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <p className="text-xl font-bold text-primary">Rp 300K</p>
                                </div>
                            </footer>
                        </div>
                    </div>
                </section>

                <section className="banner-cta banner relative">
                    <div className="bg-dark-transparant w-full h-full absolute rounded-xl -z-0"></div>
                    <div className="newslatter flex flex-col text-center gap-[4px] leading-[1.4] tracking-[0.2px] max-w-[280px] z-1">
                        <p className="text-md font-medium text-secondary-light">NEWSLETTER</p>
                        <div className="desc flex flex-col gap-[10px]">
                            <h1 className="font-semibold text-2xl leading-[1.2] text-primary-light">Mau Belajar Lebih Banyak?</h1>
                            <p className="text-sm font-normal leading-[1.4] tracking-[0.2] text-base">
                                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com

                            </p>
                        </div>
                    </div>
                    <form action="" className="w-full flex flex-col gap-[16px] z-1">
                        <input type="text" placeholder="Masukkan Emailmu" className="bg-white text-center py-[10px] px-[26px] rounded-xl" />
                        <button type="submit" className="py-[10px] px-[26px] bg-amber-400 rounded-xl text-primary-light font-bold leading-[1.4] tracking-[0.2]">Subscribe</button>
                    </form>
                </section>
            </div>

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

export default homepage
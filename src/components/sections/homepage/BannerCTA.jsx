import React from 'react'

const BannerCTA = () => {
    return (
        <>
            <section className="banner-cta banner relative">
                <div className="bg-dark-transparant w-full h-full absolute rounded-xl top-0 bottom-0 left-0 right-0 -z-0"></div>
                <div className="newslatter flex flex-col text-center gap-[4px] leading-[1.4] tracking-[0.2px] max-w-[280px] md:max-w-[525px] z-1">
                    <p className="title">NEWSLETTER</p>
                    <div className="desc flex flex-col gap-[10px]">
                        <h1 className="title">Mau Belajar Lebih Banyak?</h1>
                        <p className="text">
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com

                        </p>
                    </div>
                </div>
                <form action="" className="w-full md:w-[525px] flex flex-col gap-[16px] z-1 md:relative">
                    <input type="text" placeholder="Masukkan Emailmu" className="bg-white text-center md:text-start py-[10px] px-[26px] rounded-xl md:py-4" />
                    <button type="submit" className="py-[10px] px-[26px] bg-amber-400 rounded-xl text-primary-light font-bold leading-[1.4] tracking-[0.2] md:top-1.5 md:right-2 md: md:absolute cursor-pointer hover:bg-amber-50 hover:text-amber-400 duration-150">Subscribe</button>
                </form>
            </section>
        </>
    )
}

export default BannerCTA
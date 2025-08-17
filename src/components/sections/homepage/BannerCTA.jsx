import React from 'react'

const BannerCTA = () => {
    return (
        <>
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
        </>
    )
}

export default BannerCTA
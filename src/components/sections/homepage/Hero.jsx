const Hero = () => {
    return (
        <>
            <section className="hero banner relative">
                <div className="bg-dark-transparant w-full h-full absolute rounded-lg top-0 bottom-0 left-0 right-0 -z-0"></div>
                <h1 className="title z-1">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </h1>
                <p className="text z-1">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                </p>
                <button className="btn-cta z-1 cursor-pointer">
                    Temukan Video Course untuk Dipelajari!
                </button>
            </section>
        </>
    )
}

export default Hero
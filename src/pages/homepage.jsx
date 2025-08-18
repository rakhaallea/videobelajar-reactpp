// React Component
import Hero from "../components/sections/homepage/Hero";
import Courses from "../components/sections/homepage/Courses";
import BannerCTA from "../components/sections/homepage/BannerCTA";
import Footer from "../components/sections/homepage/Footer";





const homepage = () => {
    return (
        <>
            <div className="@container py-[28px] px-[20px] md:py-[64px] md:px-[120px] flex flex-col gap-[24px] md:gap-[64px] bg-[#FFFDF3]">
                {/* Hero Section */}
                <Hero />

                {/* Course Section */}
                <Courses />

                {/* Banner CTA Section */}
                <BannerCTA />
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default homepage
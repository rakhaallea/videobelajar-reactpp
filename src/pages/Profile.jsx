import CardProfile from "../components/sections/profile/cardProfile";

import { useEffect } from "react";
import { useNavigate } from "react-router";

const Profile = ({ user, setUser, userData }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    const userInfo = userData.find(u => u.email === (user ? user.email : null));

    return (
        <section className='@container py-[90px] px-[20px] md:py-[64px] md:px-[120px] h-screen bg-[#FFFDF3]'>
            {user && <CardProfile userInfo={userInfo} />}
        </section>
    )
}

export default Profile
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardProfile from "../components/sections/profile/cardProfile";
import useUsersStore from "../store/usersStore";

const Profile = () => {
    const navigate = useNavigate();
    const currentUser = useUsersStore((state) => state.currentUser);

    useEffect(() => {
        if (!currentUser) {
            navigate("/login"); // redirect ke login kalau belum login
        }
    }, [currentUser, navigate]);

    return (
        <section className="@container py-[90px] px-[20px] md:py-[120px] md:px-[120px] h-screen bg-[#FFFDF3]">
            {currentUser && <CardProfile userInfo={currentUser} />}
        </section>
    );
};

export default Profile;

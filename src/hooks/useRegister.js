// data user
import user from "../utils/dataUser"

//
import { useNavigate } from "react-router";

import iconProfile from '../assets/icon/icon_1.png'

const useRegister = () => {
    const navigate = useNavigate();

    const register = (data) => {
        const cekUser = user.find((u) => u.email === data.email);
        if (cekUser) {
            return { success: false, message: "Email sudah terdaftar" };
        } else {
            user.push({
                id: user.length + 1,
                name: data.name,
                email: data.email,
                gender: data.gender,
                phone: data.phone,
                img: iconProfile,
                password: data.password,
            });
            navigate("/");
            return { success: true, message: "Registrasi berhasil" };
        }
    }

    return { register }
}

export default useRegister
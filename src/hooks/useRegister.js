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
            navigate("/login");
            return { success: true, message: "Registrasi berhasil" };
        }
    }

    const editUser = (id, newData) => {
        const index = user.findIndex((u) => u.id === id);
        if (index === -1) {
            return { success: false, message: "User tidak ditemukan" };
        }

        // Update NewData
        user[index] = {
            ...user[index],
            name: newData.name,
            email: newData.email,
            password: newData.newPass,
        }

        return { success: true, message: "Data user berhasil diupdate", user: user[index] };
    }

    return { register, editUser }
}

export default useRegister
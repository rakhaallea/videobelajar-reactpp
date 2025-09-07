// data user
import user from "../utils/dataUser"

import { useNavigate } from "react-router";


const useDeleteUser = () => {
    const navigate = useNavigate();

    const deleteUser = (id) => {
        const index = user.findIndex((u) => u.id === id);
        if (index === -1) {
            return { success: false, message: "User tidak ditemukan" };
        }

        const startIndex = id - 1;

        // Delete NewData
        user.splice(startIndex, 1)

        navigate('/login')

        return { success: true, message: "Data user berhasil hapus" };
    }

    return { deleteUser }
}

export default useDeleteUser
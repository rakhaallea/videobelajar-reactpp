// data user
import user from "../utils/dataUser"

const useEditUser = () => {
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

    return { editUser }
}

export default useEditUser
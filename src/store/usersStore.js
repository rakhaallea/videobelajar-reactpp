import { create } from "zustand";
import { getUsers, createUser, updateUser, deleteUser } from "../services/api/userService";

const useUsersStore = create((set, get) => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    defaultProfile: '"https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg"',

    // ambil semua user dari API
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const res = await getUsers(); // sudah return response.data
            set({ users: res, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    // login
    login: async ({ email, password }) => {
        try {
            if (get().users.length === 0) {
                await get().fetchUsers();
            }

            const foundUser = get().users.find(
                (u) => u.email === email && u.password === password
            );

            if (foundUser) {
                set({ currentUser: foundUser });
                return { success: true, message: "Login berhasil", user: foundUser };
            }
            return { success: false, message: "Email atau password salah" };
        } catch (err) {
            return { success: false, message: err.message };
        }
    },

    // register
    register: async (data) => {
        try {
            const payload = { ...data, img: data.img || defaultProfile };
            const res = await createUser(payload);

            set({ users: [...get().users, res] });
            return { success: true, message: "Registrasi berhasil", user: res };
        } catch (err) {
            return { success: false, message: err.message };
        }
    },

    // edit user
    editUser: async (id, newData) => {
        try {
            const res = await updateUser(id, newData);

            const newUsers = get().users.map((u) =>
                u.id === id ? res : u
            );

            set({ users: newUsers, currentUser: res });
            return { success: true, message: "User berhasil diupdate", user: res };
        } catch (err) {
            return { success: false, message: err.message };
        }
    },

    // delete user
    deleteUser: async (id) => {
        try {
            await deleteUser(id);
            const newUsers = get().users.filter((u) => u.id !== id);
            set({ users: newUsers });
            return { success: true, message: "User berhasil dihapus" };
        } catch (err) {
            return { success: false, message: err.message };
        }
    },

    // logout
    logout: () => set({ currentUser: null }),
}));

export default useUsersStore;

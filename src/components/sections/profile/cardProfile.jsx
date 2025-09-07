import { useEffect, useState } from "react"

import imgProfile from "../../../assets/icon/jess-icon.png"
import useEditUser from "../../../hooks/useEditUser";
import useDeleteUser from "../../../hooks/useDeleteUser";

const CardProfile = ({ userInfo }) => {

    const { editUser } = useEditUser();
    const { deleteUser } = useDeleteUser();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        oldPass: '',
        newPass: '',
        confPass: '',
    })

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (userInfo) {
            setFormData({
                name: userInfo.name || '',
                email: userInfo.email || '',
                oldPass: '',
                newPass: '',
                confPass: '',
            })
        }
    }, [userInfo])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleDelete = (id) => {
        // console.log(deleteUser(id))
        // Contoh penggunaan di web
        let yakinHapus = confirm("Apakah Anda yakin ingin menghapus akun ini?");

        if (yakinHapus) {
            // Jika pengguna mengklik OK (true)
            deleteUser(id)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.oldPass !== userInfo.password) {
            setError('Password lama tidak sesuai');
        } else if (formData.newPass !== formData.confPass) {
            setError("Password dan konfirmasi password tidak sesuai");
        } else {
            setError('');
            const result = editUser(userInfo.id, formData)
            if (!result.message) {
                setError(result.message)
            }

            if (result.message) {
                setSuccess(result.message)
            }

            userInfo.password = formData.newPass;
            if (userInfo) {
                setFormData({
                    name: result.user.name || '',
                    email: result.user.email || '',
                    oldPass: '',
                    newPass: '',
                    confPass: '',
                })

            }
        }
    }

    return (
        <div className="flex justify-center flex-col bg-white shadow-xl rounded-xl overflow-hidden">
            <header className="py-3 px-4 bg-amber-300">
                <h1 className="font-bold text-white tracking-[1px]">Profile</h1>
            </header>
            <div className="flex flex-col justify-center items-center px-4 py-6 gap-6">
                <img src={imgProfile} alt="" className="w-40 rounded-full" />
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
                    <div className="flex justify-between items-center gap-0">
                        <label htmlFor="inputName" className="text-[12px] font-medium">Nama Lengkap</label>
                        <input type="text" className="px-2 py-1 border border-amber-200 rounded-sm text-[12px]" id="inputName" value={formData.name} onChange={handleChange} name="name" />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="inputEmail" className="text-[12px] font-medium">Email</label>
                        <input type="email" className="px-2 py-1 border border-amber-200 rounded-sm text-[12px]" id="inputEmail" value={formData.email} onChange={handleChange} name="email" />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="inputOldPass" className="text-[12px] font-medium">Old Password</label>
                        <input type="password" className="px-2 py-1 border border-amber-200 rounded-sm text-[12px]" id="inputOldPass" value={formData.oldPass} onChange={handleChange} name="oldPass" />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="inputNewPass" className="text-[12px] font-medium">New Password</label>
                        <input type="password" className="px-2 py-1 border border-amber-200 rounded-sm text-[12px]" id="inputNewPass" value={formData.newPass} onChange={handleChange} name="newPass" />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="inputConfPass" className="text-[12px] font-medium">Confirm Password</label>
                        <input type="password" className="px-2 py-1 border border-amber-200 rounded-sm text-[12px]" id="inputConfPass" value={formData.confPass} onChange={handleChange} name="confPass" />
                    </div>
                    <div className="flex justify-end gap-2 py-2">
                        <button className="btn bg-red-500" type="button" onClick={() => { handleDelete(userInfo.id) }}>Delete</button>
                        <button className="btn bg-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardProfile
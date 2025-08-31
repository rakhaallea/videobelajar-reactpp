// data user
import user from "../utils/dataUser"

//
import { useNavigate } from "react-router";

const useLogin = () => {
    const navigate = useNavigate();

    const login = (data) => {
        const foundUser = user.find(
            u => u.email === data.email && u.password === data.password
        );

        if (foundUser) {
            navigate("/");
            return { success: true, message: "Login successful", user: foundUser };
        } else {
            return { success: false, message: "Invalid email or password" };
        }
    }

    return { login }
}

export default useLogin
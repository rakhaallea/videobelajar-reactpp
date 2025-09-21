import { Link, useNavigate } from "react-router-dom";

// Elements
import Input from "../components/elements/inputs/input";
import Label from "../components/elements/label/label";

// Icons
import iconGoogle from "../assets/icon/google_icon.png";

// State
import { useState } from "react";
import useUsersStore from "../store/usersStore";

const LoginForm = () => {
    const navigate = useNavigate();
    const login = useUsersStore((state) => state.login);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    // handle input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle login
    // handle login
    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(formData); // pakai await
        if (result.success) {
            navigate("/");
            setFormData({ email: "", password: "" });
        } else {
            setError(result.message);
        }
    };


    return (
        <main className="container min-h-screen py-[28px] px-[20px] md:py-[64px] bg-[#FFFDF3]">
            <form className="form-container" onSubmit={handleSubmit}>
                <header className="form-header">
                    <h1 className="form-title">Masuk Ke Akun</h1>
                    <p className="form-text">
                        Yuk, lanjutin belajarmu di videobelajar.
                    </p>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </header>

                <main className="form-group">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-1">
                                <Label toId="email-input" text="E-Mail" />
                                <Input
                                    type="email"
                                    id="email-input"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label toId="password-input" text="Kata Sandi" />
                                <Input
                                    type="password"
                                    id="password-input"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="label-title text-right">Lupa Password?</p>
                        </div>

                        <div className="flex flex-col gap-[16px]">
                            <button className="btn primary" type="submit">
                                Masuk
                            </button>
                            <Link className="btn primary primary-100" to="/register">
                                Register
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <hr className="flex-1/2 text-other-op1" />
                        <p className="form-text">atau</p>
                        <hr className="flex-1/2 text-other-op1" />
                    </div>

                    <button className="btn-google" type="button">
                        <img
                            src={iconGoogle}
                            alt="icon google"
                            width={15}
                            height={20}
                        />
                        <p className="form-text">Masuk Dengan Google</p>
                    </button>
                </main>
            </form>
        </main>
    );
};

export default LoginForm;

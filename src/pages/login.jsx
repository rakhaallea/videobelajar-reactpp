import { Link } from "react-router"

// Elements
import Input from '../components/elements/inputs/input'
import Label from '../components/elements/label/label'

// Icons
import iconGoogle from '../assets/icon/google_icon.png'

const login = () => {
    return (
        <>
            <main className='container min-h-screen py-[28px] px-[20px] md:py-[64px] bg-[#FFFDF3]'>
                {/* <Form form={form} /> */}
                <form action="/home" className='form-container'>
                    {/* {headers[form]} */}

                    <header className='form-header'>
                        <h1 className='form-title'>
                            Masuk Ke Akun
                        </h1>
                        <p className='form-text'>
                            Yuk, lanjutin belajarmu di videobelajar.
                        </p>
                    </header>

                    <main className='form-group'>
                        <div className='flex flex-col gap-[24px]'>
                            {/* {inputs[form]} */}

                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="email-input" text="E-Mail" />
                                    <Input type="email" id="email-input" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="password-input" text="Kata Sandi" />
                                    <Input type="password" id="password-input" />
                                </div>
                                <p className='label-title text-right'>Lupa Password?</p>
                            </div>

                            <div className='flex flex-col gap-[16px]'>
                                {/* {buttons[form]} */}

                                <button
                                    className='btn primary'
                                    type="submit">
                                    Masuk
                                </button>
                                <Link
                                    className='btn primary primary-100'
                                    to='/register'>Register
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <hr className='flex-1/2 text-other-op1' />
                            <p className='form-text'>atau</p>
                            <hr className='flex-1/2 text-other-op1' />
                        </div>
                        <button className='btn-google'>
                            <img src={iconGoogle} alt="icon google" width={15} height={20} />
                            <p className='form-text'>Masuk Dengan Google</p>
                        </button>
                    </main>
                </form>
            </main>
        </>
    )
}

export default login
import { Link } from "react-router"

// Elements
import Input from '../components/basics/inputs/input'
import Label from '../components/basics/label/label'
import Option from '../components/basics/option/Option'

// Icons
import iconGoogle from '../assets/icon/google_icon.png'

// Data
import { dataTelp } from '../utils/data.js';

// State
import { useState } from 'react'

const register = () => {
    const [selected, setSelected] = useState(dataTelp[0]);

    return (
        <>
            <main className='@container min-h-screen py-[28px] px-[20px] md:py-[64px] bg-[#FFFDF3]'>
                {/* <Form form={form} /> */}


                <form className='form-container'>
                    {/* {headers[form]} */}

                    <header className='form-header'>
                        <h1 className='form-title'>
                            Pendaftaran Akun
                        </h1>
                        <p className='form-text'>
                            Yuk, daftarkan akunmu sekarang juga!
                        </p>
                    </header>

                    <main className='form-group'>
                        <div className='flex flex-col gap-[24px]'>
                            {/* {inputs[form]} */}

                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="name-input" text="Nama Lengkap" />
                                    <Input type="text" id="name-input" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="email-input" text="E-mail" />
                                    <Input type="email" id="email-input" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="gender-input" text="Jenis Kelamin" />
                                    <select id="gender-input" className="input-text outline-0">
                                        <Option gender="Pria" />
                                        <Option gender="Wanita" />
                                    </select>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <Label toId="password-input" text="Kata Sandi" />
                                    <Input type="password" id="password-input" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="password-input" text="Konfirmasi Kata Sandi" />
                                    <Input type="password" id="password-input" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <Label toId="phone-input" text="No HP" />
                                    <div className="flex gap-4">
                                        <div className="flex justify-between items-center flex-2/3 md:flex-2/4 w-full border rounded border-other">
                                            <div className='bg-gray-200 h-full flex items-center p-3 rounded-sm'>
                                                <img src={selected.img} width={25} />
                                            </div>
                                            <select
                                                className="border-none outline-0 h-full flex-2"
                                                value={selected.kodeTelp}
                                                onChange={(e) => {
                                                    const found = dataTelp.find((item) => item.kodeTelp == e.target.value);
                                                    if (found) setSelected(found);
                                                }}
                                            >
                                                {dataTelp.map((item) => (
                                                    <option key={item.kodeTelp} value={item.kodeTelp}>
                                                        +{item.kodeTelp}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <Input type="number" id="phone-input" />
                                    </div>
                                </div>

                                <p className='label-title text-right'>Lupa Password?</p>
                            </div>

                            <div className='flex flex-col gap-[16px]'>
                                {/* {buttons[form]} */}

                                <button
                                    className='btn primary'
                                    type="submit">
                                    Register
                                </button>
                                <Link
                                    className='btn primary primary-100'
                                    to='/'>Masuk
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

export default register
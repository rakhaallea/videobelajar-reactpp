import iconIndonesia from '../../../assets/indonesia.png';
import Label from '../../basics/label/label';
import Input from '../../basics/inputs/input';
import Option from '../../basics/option/Option';

import { dataTelp } from '../../../utils/data';

import { useState } from 'react'

const inputRegister = () => {
    const [selected, setSelected] = useState(dataTelp[0]);


    return (
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
                    <Option gender="pria" />
                    <Option gender="wanita" />
                </select>
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
            <div className='flex flex-col gap-1'>
                <Label toId="pass-input" text="Password" />
                <Input type="password" id="pass-input" />
            </div>
            <div className='flex flex-col gap-1'>
                <Label toId="repass-input" text="Konfirmasi Kata Sandi" />
                <Input type="password" id="repass-input" />
            </div>
            <p className='label-title text-right'>Lupa Password?</p>
        </div>
    )
}

export default inputRegister
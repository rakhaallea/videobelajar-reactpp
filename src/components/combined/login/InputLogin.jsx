import Label from "../../basics/label/label"
import Input from "../../basics/inputs/input"

const InputLogin = () => {
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-col gap-1'>
                <Label toId="email-input" text="Email" />
                <Input type="email" id="email-input" />
            </div>
            <div className='flex flex-col gap-1'>
                <Label toId="password-input" text="Password" />
                <Input type="password" id="password-input" />
            </div>
            <p className='label-title text-right'>Lupa Password?</p>
        </div>
    )
}

export default InputLogin
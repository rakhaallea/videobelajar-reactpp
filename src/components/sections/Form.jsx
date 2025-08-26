import iconGoogle from '../../assets/icon/google_icon.png'
import ButtonLogin from '../combined/login/ButtonLogin'
import ButtonRegister from '../combined/register/ButtonRegister'
import HeaderLogin from './form/HeaderLogin'
import HeaderRegister from './form/headerRegister'
import InputLogin from '../combined/login/InputLogin'
import InputRegister from '../combined/register/inputRegister'

const headers = {
    login: <HeaderLogin />,
    register: <HeaderRegister />,
};

const inputs = {
    login: <InputLogin />,
    register: <InputRegister />,
};

const buttons = {
    login: <ButtonLogin />,
    register: <ButtonRegister />,
};

const Form = ({ form }) => {

    return (
        <form action="/home" className='form-container' onSubmit={handleSubmit}>
            {headers[form]}

            <main className='form-group'>
                <div className='flex flex-col gap-[24px]'>
                    {inputs[form]}

                    <div className='flex flex-col gap-[16px]'>
                        {buttons[form]}
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
    )
}

export default Form
import iconGoogle from '../assets/icon/google_icon.png'

const Form = () => {
    return (
        <form action="/home" className='form-container'>
            <header className='form-header'>
                <h1 className='form-title'>Masuk Ke Akun</h1>
                <p className='form-text'>
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </header>
            <main className='form-group'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='label-title'>E-Mail <span className='text-red-500'>*</span></label>
                            <input type="email" required className='input-text' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='label-title'>Kata Sandi <span className='text-red-500'>*</span></label>
                            <input type="password" required className='input-text' />
                        </div>
                        <p className='label-title text-right'>Lupa Password?</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <button className='btn primary' type='submit'>Masuk</button>
                        <button className='btn primary-100'>Daftar</button>
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
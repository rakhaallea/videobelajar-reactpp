import iconGoogle from '../assets/icon/google_icon.png'

const Form = () => {
    return (
        <form action="" className='flex flex-col gap-[20px] p-[20px] rounded-sm bg-[#FFF] border border-solid border-[rgba(241,241,241,1)]'>
            <header className='flex flex-col gap-[10px] text-center'>
                <h1 className='font-semibold text-2xl'>Masuk Ke Akun</h1>
                <p className='font-normal text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(51,51,51,0.68)]'>
                    Yuk, lanjutin belajarmu di videobelajar.
                </p>
            </header>
            <main className='flex flex-col gap-[20px]'>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(51,51,51,0.68)]'>E-Mail <span className='text-red-500'>*</span></label>
                            <input type="text" required className='w-full py-[8px] px-[10] border rounded-md border-[rgba(58,53,65,0.12)]' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(51,51,51,0.68)]'>Kata Sandi <span className='text-red-500'>*</span></label>
                            <input type="text" required className='w-full py-[8px] px-[10] border rounded-md border-[rgba(58,53,65,0.12)]' />
                        </div>
                        <p className='text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(51,51,51,0.68)] text-right'>Lupa Password?</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <button className='py-[7px] px-[22px] bg-[rgba(62,207,76,1)] rounded-[10px] text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(255,255,255,1)] font-bold'>Masuk</button>
                        <button className='py-[7px] px-[22px] bg-[rgba(226,252,217,0.8)] rounded-[10px] text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(62,207,76,1)] font-bold'>Daftar</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <hr className='' />
                    <p>atau</p>
                    <hr />
                </div>
                <button className='flex justify-center items-center border rounded-md border-[rgba(241,241,241,1)] py-[8px] px-[26px] gap-[8px]'>
                    <img src={iconGoogle} alt="icon google" width={15} height={20} />
                    <p className='text-[14px] leading-[1.4] tracking-[0.2px] text-[rgba(74,80,92,1)] font-bold'>Masuk Dengan Google</p>
                </button>
            </main>
        </form>
    )
}

export default Form
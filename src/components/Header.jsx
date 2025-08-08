import logoNavbar from '../assets/icon/logo_mobile.png';

const Header = () => {
    return (
        <header className='container py-[16px] px-[24px] border-t-1 border-b-1 border-white shadow-lg'>
            <img src={logoNavbar} alt="video belajar logo" />
        </header>
    )
}

export default Header
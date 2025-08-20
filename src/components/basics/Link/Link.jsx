import { Link, useLocation } from "react-router"

const LinkTo = ({ text, path }) => {
    const location = useLocation();

    const isActive = location.pathname === '/register' && text === 'Register';

    return (
        <>
            <Link
                className={`btn ${isActive ? 'primary' : 'primary-100'}`}
                to={path}>{text}
            </Link>
        </>
    )
}

export default LinkTo
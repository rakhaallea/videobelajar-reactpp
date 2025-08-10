import { Link } from "react-router"

const LinkTo = ({ text, path }) => {
    return (
        <>
            <Link className='btn primary-100' to={path}>{text}</Link>
        </>
    )
}

export default LinkTo
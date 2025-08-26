const Button = ({ type, text }) => {
    return (
        <>
            <button
                className='btn primary'
                type={type}>
                {text}
            </button>
        </>
    )
}

export default Button
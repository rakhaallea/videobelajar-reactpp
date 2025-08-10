

const HeaderFormInput = ({ heading, text }) => {
    return (
        <header className='form-header'>
            <h1 className='form-title'>
                {heading}
            </h1>
            <p className='form-text'>
                {text}
            </p>
        </header>
    )
}

export default HeaderFormInput
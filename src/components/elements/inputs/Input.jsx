
const Input = ({ id, type = "text", name, value, onChange }) => {
    return (
        <input
            id={id}
            type={type}
            className='input-text'
            name={name}
            value={value}
            onChange={onChange}
            required
        />
    )
}

export default Input
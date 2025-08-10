import React from 'react'

const Input = (id, type) => {
    return (
        <input
            id={id}
            type={type}
            className='input-text'
            required
        />
    )
}

export default Input
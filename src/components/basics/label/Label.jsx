import React from 'react'

const Label = ({ toId, text }) => {
    return (
        <label
            htmlFor={toId}
            className='label-title'>
            {text} <span className='text-red-500'>*</span>
        </label>
    )
}

export default Label
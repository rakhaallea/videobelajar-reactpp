import React from 'react'

const Option = ({ gender }) => {
    return (
        <option value={gender} className="label-title">
            {gender}
        </option>
    )
}

export default Option
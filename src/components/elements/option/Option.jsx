

const Option = ({ value }) => {
    return (
        <option value={value} className="label-title">
            {value ? value : "Pilih Jenis Kelamin"}
        </option>
    )
}

export default Option
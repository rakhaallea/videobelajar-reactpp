import Button from "../../basics/Button/Button"
import LinkTo from "../../basics/Link/Link"

const ButtonRegister = () => {
    return (
        <>
            <Button type="submit" text="Register" />
            <LinkTo text="Masuk" path="/" />
        </>
    )
}

export default ButtonRegister
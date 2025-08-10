import Button from '../../basics/Button/Button'
import LinkTo from '../../basics/Link/Link'

const ButtonLogin = () => {
    return (
        <>
            <Button type="submit" text="Masuk" />
            <LinkTo text="Register" path="/register" />
        </>
    )
}

export default ButtonLogin
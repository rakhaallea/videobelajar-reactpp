
import Form from "../components/sections/Form"

const register = ({ form }) => {
    return (
        <>
            <main className='@container min-h-screen py-[28px] px-[20px] bg-[#FFFDF3]'>
                <Form form={form} />
            </main>
        </>
    )
}

export default register
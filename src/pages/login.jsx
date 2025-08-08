// Component
import Header from '../components/Header';
import Form from '../components/Form';

import { Link } from 'react-router'



const login = () => {
    return (
        <>
            <Header />
            <main className='container h-screen py-[28px] px-[20px] bg-[#FFFDF3]'>
                <Form />
            </main>
        </>
    )
}

export default login
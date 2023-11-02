'use client'
import { useState, useEffect } from 'react'
import LoginNav from '../../components/loginnav';
import axios from 'axios';
import { getFromLocalStorage, saveToLocalStorage } from '@/helper/localstorge';
import { useRouter } from 'next/navigation';


export default function Login() {
    const [users, setUsers] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const token = getFromLocalStorage('token')
    
    const validate = () => {
        if (email.length < 12 || email === '') {
            setEmailErr(true);
        }
        else {
            setEmailErr(false)
        }
        if (password.length < 6 || password == '') {
            setPwdError(true);
        }
        else {
            setPwdError(false)
        }
    };

    async function getData(email: string, password: string) {
        const registerOptions = {
            method: 'POST',
            url: 'http://localhost:4000/signin',
            data: {
                email,
                password
            }
        }
        const respose = await axios.request(registerOptions)
        
        setUsers(respose.data.data)
        saveToLocalStorage('token', respose.data.data );
        if (respose.data.data) {
            router.push('/')
        }

    }

    useEffect(() => {
        if (token) {
            router.push('/')
        }
    }, [] )
    const router = useRouter()
    return (
        <div>
            <LoginNav />
            <form className='absolute top-[30%] left-[50%] -translate-x-1/2' onSubmit={(e) => {
                e.preventDefault()
                if (!emailErr && !pwdError) {
                    getData(email, password)
                }
            }}>
                <h1 className='text-5xl font-serif text-center'>Login</h1>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="email" />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                        </div>
                    </div>
                    {emailErr && <p className='text-red-500'>Your email is invalid</p>
                    }
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="password" />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                        </div>
                    </div>
                    {pwdError && <p className='text-red-500'>Your password is invalid</p>}
                </div>
                <button onClick={validate} className='mt-3 button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black w-80'>
                    Signup
                </button>
            </form>
        </div>
    );
}

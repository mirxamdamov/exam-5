"use client"
import { getFromLocalStorage } from "../../helper/localstorge";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function EditProfil() {
    const [username, setUsername] = useState('');
    const [price, setprice] = useState('');
    const router = useRouter();


    const handleSubmit = async (e:any) => {
        e.preventDefault();

        // Validate the input

        // If username is valid, send the PUT request
            try {
                const token = getFromLocalStorage('token');
                const response = await axios.put('http://localhost:4000/user', {data:{
                    username, price 
                }}, {
                    headers: {
                        'Authorization': token
                    }
                });

                if (response.status === 200) {
                    router.push('/profile');
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
    };


    return (
        <form className='absolute top-[30%] left-[50%] -translate-x-1/2' onSubmit={handleSubmit}>
            <h1 className='text-5xl font-serif text-center'>Profil Edit</h1>
            <div className='mt-3'>
                <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input value={username}
                        onChange={(e) => setUsername(e.target.value)} type="username" name="username" id="username" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="username" />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input value={price}
                        onChange={(e) => setprice(e.target.value)} type="username" name="username" id="username" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="username" />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                    </div>
                </div>
            </div>
            <button className='mt-3 button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black w-80'>
                Submit
            </button>
        </form>
    )    
}
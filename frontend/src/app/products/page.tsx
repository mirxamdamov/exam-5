"use client"

// import Navbar from "../../components/nav";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Image from "next/image";
// import { ProductType } from "../../types/index";


// const ProductsPage = () => {
//     import React, { useState } from 'react';
//     import axios from 'axios';

//     export default function ProductForm() {
//         const [formData, setFormData] = useState({
//             title: '',
//             price: '',
//             description: '',
//             category: '',
//             file: null,
//             rate: '',
//             count: '',
//         });
//         const [errors, setErrors] = useState({});

//         const handleChange = (e) => {
//             const { name, value, type } = e.target;
//             const newValue = type === 'file' ? e.target.files[0] : value;
//             setFormData({
//                 ...formData,
//                 [name]: newValue,
//             });
//         };

//         const handleSubmit = async (e:any) => {
//             e.preventDefault();

//             const data = new FormData();
//             for (const key in formData) {
//                 data.append(key, formData[key]);
//             }

//             try {
//                 const response = await axios.post('http://localhost:4000/products', data, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });

//                 if (response.status === 200) {
//                     // Handle success (e.g., redirect to another page)
//                 } else {
//                     // Handle other responses
//                 }
//             } catch (error) {
//                 // Handle errors
//                 console.error('Error:', error);
//             }
//         };

//     return (
//         <main>
//             <Navbar />
//             <form className='absolute top-[30%] left-[50%] -translate-x-1/2' onSubmit={onSubmit = { async(e) => {
//                 e.preventDefault();

//             const formData = new FormData();
//             formData.append('file', file); // Add the file to the FormData

//             // Add other form data to the FormData
//             formData.append('title', title);
//             formData.append('price', price);
//             formData.append('description', description);
//             formData.append('category', category);
//             formData.append('rate', rate);
//             formData.append('count', count);

//             // Send a POST request with the FormData for file upload
//             try {
//                 await axios.post('http://localhost:4000/products', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data', // Set the correct Content-Type header
//                         'Authorization': getFromLocalStorage('token')
//                     }
//                 });

//         // Handle success and/or redirection
//     } catch (error) {
//                 console.error('Error:', error);
//     }}
//                  >
//                 <h1 className='text-5xl font-serif text-center'>Add products</h1>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={title}
//                             onChange={(e) => setTitle(e.target.value)} type="text" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="email" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>

//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">price</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                             type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="price" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                     {priceErr && <p className='text-red-500'>Your price is invalid</p>}
//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">description</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             type="text" name="description" id="description" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="description" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                     {dspErr && <p className='text-red-500'>Your description is invalid</p>}
//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Category</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="password" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                     {categoryErr && <p className='text-red-500'>Your category is invalid</p>}
//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">file</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input 
//                             accept="image/*"
//                             onChange={(e: any) => {
//                                 const file = e.target.files[0];
//                                 // const url = URL.createObjectURL(file);
//                                 setFile(file)
//                             }}
//                             type="file" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="file" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">rate</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={rate}
//                             onChange={(e) => setRate(e.target.value)}
//                             type="rate" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="rate" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-3'>
//                     <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">count</label>
//                     <div className="relative mt-2 rounded-md shadow-sm">
//                         <input value={count}
//                             onChange={(e) => setCount(e.target.value)}
//                             type="count" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="count" />
//                         <div className="absolute inset-y-0 right-0 flex items-center">
//                         </div>
//                     </div>
//                 </div>
//                 <button onClick={validate} className='mt-3 button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black w-96'>
//                     submit
//                 </button>
//             </form>
//         </main>
//     )
// }
// }

// export default ProductsPage

import { getFromLocalStorage } from "../../helper/localstorge";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ProductsPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [titleErr, setTitleErr] = useState(false);
    const [price, setPrice] = useState('');
    const [priceErr, setPriceErr] = useState(false);
    const [description, setDescription] = useState('');
    const [dspErr, setDspErr] = useState(false);
    const [category, setCategory] = useState('');
    const [categoryErr, setCategoryErr] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [rate, setRate] = useState('');
    const [rateErr, setRateErr] = useState(false);
    const [count, setCount] = useState('');
    const [countErr, setCountErr] = useState(false);

    const router = useRouter();

    const validate = () => {
        setTitleErr(!title);
        setPriceErr(!price);
        setDspErr(!description);
        setCategoryErr(!category);
        setRateErr(!rate);
        setCountErr(!count);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        validate();

        if (title && price && description && category && rate && count) {
            try {
                const formData = new FormData();
                formData.append('file', file as Blob);
                formData.append('title', title);
                formData.append('price', price);
                formData.append('description', description);
                formData.append('category', category);
                formData.append('rate', rate);
                formData.append('count', count);

                const token = getFromLocalStorage('token');
                await axios.post('http://localhost:4000/products', formData, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/form-data'
                    }
                });

                router.push('/');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <main>
            <form
                className='absolute top-[30%] left-[50%] -translate-x-1/2'
                onSubmit={handleSubmit}
            >
                <h1 className='text-5xl font-serif text-center'>Add products</h1>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Title</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name="title"
                            id="title"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Title"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                    {titleErr && <p className='text-red-500'>Title is required</p>}
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Price</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Price"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                    {priceErr && <p className='text-red-500'>Price is required</p>}
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Description</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            name="description"
                            id="description"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Description"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                    {dspErr && <p className='text-red-500'>Description is required</p>}
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Category</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Category"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center"></div>
                    </div>
                    {categoryErr && <p className='text-red-500'>Category is required</p>}
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">File</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            accept="image/*"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const selectedFile = e.target.files?.[0];
                                if (selectedFile) {
                                    setFile(selectedFile);
                                }
                            }}
                            type="file"
                            name="file"
                            id="file"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="File"
                        />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Rate</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Rate"
                        />
                    </div>
                    {rateErr && <p className='text-red-500'>Rate is required</p>}
                </div>
                <div className='mt-3'>
                    <label className="-mb-3 block text-sm font-medium leading-6 text-gray-900">Count</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Count"
                        />
                    </div>
                    {countErr && <p className='text-red-500'>Count is required</p>}
                </div>
                <button onClick={validate} className='mt-3 button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black w-[100%]'>
                    Submit
                </button>
            </form>
        </main>
    );
}

export default ProductsPage;

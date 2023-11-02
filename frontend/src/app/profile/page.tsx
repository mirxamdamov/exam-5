"use client"

import Navbar from "../../components/nav";
import { getFromLocalStorage } from "../../helper/localstorge";
import {  User } from "../../types/index";
import axios from "axios";
import {useState , useEffect} from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile: React.FC = function () {
    const router = useRouter()
    const BtnClick = () => {
        router.push('/profilform')
    }
    const [products, setProducts] = useState<User>();
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:4000/user',{
                    headers:{
                        "Authorization":getFromLocalStorage('token')
                    }
                });
                const productsData: User = response.data;
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);    
    return(
        <main className="bg-[#cbc9c971] w-[100vw] h-[100vh]" >
            <Navbar/>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded p-52">
                <div className="flex gap-20">
                    <div className="mb-3">
                        <p className="text-2xl">Username</p>
                        <p className="font-bold">{products?.username}</p>
                    </div>
                      <div className="mb-3">
                        <p className="text-xl">email</p><p className="text-xl font-bold">{products?.email}</p>
                    </div>
                </div>
                <div className="flex gap-20">
                    <div className="mb-3">
                        <p className="text-2xl">Password</p>
                        <p className="font-bold">•••••••</p>
                    </div>
                      <div className="mb-3">
                        <p className="text-xl">price</p><p className="text-xl font-bold">{products?.price}</p>
                    </div>
                </div>
                <button className="rounded-full hover:bg-slate-200 w-10 h-10 absolute top-3 right-3 flex" onClick={BtnClick}><Image className="absolute top-[5px] start-[10px]"  src={require('../../../public/edit pin.png')} width={25} height={25} alt="" /></button>
            </div>
        </main>
    )
}

export default Profile
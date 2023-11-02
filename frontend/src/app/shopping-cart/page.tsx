"use client"

import Product from "../../components/products"
import Navbar from "../../components/nav"
import axios from "axios"
import { getFromLocalStorage } from "../../helper/localstorge"
import {useState,useEffect} from 'react'
import { ProductType, UserType } from "../../types"

function ShoppingCart() {
    const [userData, setUserData] = useState<ProductType[]>([]);

    useEffect(() => {
        if (getFromLocalStorage('token')) {
            axios.get('http://localhost:4000/user', {
                headers: {
                    Authorization: getFromLocalStorage('token'),
                },
            })
                .then((response) => {
                    setUserData(response.data.Products);
                })
                .catch((error) => {
                    console.error('Xatolik yuz berdi:', error);
                });
        }
    }, []);
    return(
        <main>
            <Navbar />
            <section className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-[5%]'>
                <div className='flex flex-col space-y-12'>
                    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                        {userData.map(product => {
                            if (product.count != 0) {
                                return <Product key={product.id} product={product} />

                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ShoppingCart
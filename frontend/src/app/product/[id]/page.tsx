"use client"

import axios from 'axios';
import CustomImage from '../../../components/image';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFromLocalStorage } from '../../../helper/localstorge';
import { data } from 'autoprefixer';


const ProductDetailedPage: React.FC = () => {
	try {
		const { id } = useParams(); // URL parametrlarini olish

		const [userData, setUserData] = useState<any>({});
		const [pricedata, setpriceData] = useState<any>();
		const [userDataerr, setUserDataerr] = useState(false);
		const [product, setproducts] = useState<any>({})
		// Xar bir ma'lumot o'zgarishida ma'lumotni yuklab turish uchun useEffect
		

		const handlGetRequest = async () => {
			const req = await axios.get('http://localhost:4000/user', {
				headers: {
					Authorization: getFromLocalStorage('token')
				}
			})
			setUserData(req.data)
			console.log(req.data.price);
			
		}
		const fetchData = async () => {
			const res = await fetch(`http://localhost:4000/product/${id}`);
			const product = await res.json();
			console.log(product.price);
			
			setproducts(product);
			
			setpriceData((await userData.price - 0) - product.price)
			
			return product;
		}

		useEffect(() => {
			fetchData();
			handlGetRequest();
		}, []);

		const handlePostRequest = async () => {
			try {
				if (userData.price >= product.price) {
					const response = await axios.post('http://localhost:4000/orders', { product_id: id }, {
						headers: {
							Authorization: getFromLocalStorage('token')
						}
					});
				}else{
					setUserDataerr(true)
				}
			} catch (error) {
			}
		};

		console.log(pricedata);
		
			const fetchOrderDetails = async () => {
				try {
					
					const response = await axios.put(`http://localhost:4000/user`, {
						data: {
							price:await pricedata
						}
					} ,{
						headers:{
							Authorization:getFromLocalStorage('token')
						}
					});
				} catch (error) {
					console.error('Error fetching order details:', error);
				}
			};

		const star: number[] = []
		const starsArr: number[] = []

		for (let i = 0; i < product.rate; i++) {
			star.push(1)
		}
		for (let i = 0; i < 5 - star.length; i++) {
			starsArr.push(0)
		}


		return (
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10'>
				<CustomImage product={product} />

				<form className='divide-2' onSubmit={(e) => {e.preventDefault()
					 fetchOrderDetails()}}>
					<div className='space-y-2 pb-8'>
						<h1 className='text-2xl md:text-4xl font-bold'>
							{product.title}
						</h1>
						<h2 className='text-gray-500 font-bold text-xl md:text-3xl'>
							${product.price}
						</h2>
					</div>
					<div>
						<p className='text-xs md:text-sm'>
							{product.description}
						</p>
					</div>
					<div>
						<p className='text-xs md:text-sm'>
							count:{product.count}
						</p>
					</div>
					<div>
						<p className='text-xs md:text-sm gap-2 flex'>
							{
								star.map((e, index) => <Image key={index} src={require('../../../../public/Orange_star.svg.png')} width={25} height={25} alt='' />)
							}
							{
								starsArr.map((e, index) => <Image key={index} src={require('../../../../public/star-mark.svg')} width={25} height={25} alt='' />)
							}
						</p>
					</div>
					<button className='mt-3 button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black w-80' onClick={handlePostRequest}>
						Add bage
					</button>
					{userDataerr && <p className='text-red-5000'>pulingiz yetmaydi afsus 😥</p>}
				</form>
			</div>
		);
	} catch (error) {
		notFound();
	}
};

export default ProductDetailedPage;

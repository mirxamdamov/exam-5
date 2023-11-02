'use client'

import Navbar from "../components/nav"
import Product from "../components/products"
import { getFromLocalStorage } from "../helper/localstorge"
import { ProductType } from "../types/index"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect, FC } from 'react'

export default function Home() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [selectedOption, setSelectedOption] = useState<string>('all');
	const [searchQuery, setSearchQuery] = useState<string>('');
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
		(selectedOption === '' || product.category === selectedOption || selectedOption === 'all')
	);
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get('http://localhost:4000/products');
				const productsData: ProductType[] = response.data;
				setProducts(productsData);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		}

		fetchProducts();
	}, []);

	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	const router = useRouter()
	if (!getFromLocalStorage('token')) {
		router.push('/login')
	} else {

		console.log(selectedOption);



		return (
			<main>
				<Navbar />
				<div className="relative">
					<input className="border mt-28 w-[60%] mx-[20%] px-5 py-3 rounded-full focus:border focus:outline-none" type="search" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
					<select value={selectedOption} onChange={handleOptionChange} className="border-2 rounded-e-full p-2 absolute top-[70%] end-[20%] py-3">
						<option value="all" className="bg-white hover:bg-gray-200">All</option>
						<option value="car" className="bg-white hover:bg-gray-200">Car</option>
						<option value="phone" className="bg-white hover:bg-gray-200">Phone</option>
					</select>
				</div>
				<section className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-[5%]'>
					<div className='flex flex-col space-y-12'>
						<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
							{filteredProducts.map(product => {
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
}

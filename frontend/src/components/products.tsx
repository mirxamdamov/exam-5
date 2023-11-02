'use client';

import Link from 'next/link';
import { FC,useState } from 'react';
import Image from 'next/image';

const Product: FC<{ product: any }> = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Link
            href={`/product/${product.id}`}
            className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border'
        >
            <div className='relative max-h-80 flex-1'>
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                        }}`}
                    onLoadingComplete={() => setIsLoading(false)}
                />            </div>

            <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                {product.category}
            </h3>
            <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
                <p className='w-44 truncate'>{product.title}</p>
                <p>${product.price}</p>
            </div>
            <p className='leading-relaxed text-base line-clamp-2'>
                {product.description}
            </p>
        </Link>
    );
};

export default Product;

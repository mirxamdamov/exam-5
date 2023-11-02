// import './nav.css'
// import Link from 'next/link'

// export default function Navigation() {
//     return (
//         <nav>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUI7k0GUUW1vwyt9zb8eNUv4LAzCY1pXnltQ_CYYEPAFmGF93GkZnqCESlCkZ8ZAxFwAQ&usqp=CAU" width='90px' alt="" />
//             <input type="search" placeholder='search'/>
//             <ul>
//                 <li><Link className='linkli' href='/'>Home</Link></li>
//                 <li><Link className='linkli' href='/porfile'>Porfile</Link></li>
//                 <li><Link className='linkli' href='/card'>My card</Link></li>
//             </ul>
//             <button className="btn-signin"><Link className='link' href="/sigin">Signin</Link></button>
//             <button className="btn-signup"><Link className='link' href="/login">Login</Link></button>
//         </nav>
//     )
// }

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
     return(
         <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white shadow-[1px 14px 8px 0px rgba(34, 60, 80, 0.2)]'>
             <Link href={'/'}>
                 <Image
                     src={'/logo.svg'}
                     alt={'logo'}
                     width={150}
                     height={40}
                 />
             </Link>

             <div className='flex items-center space-x-2.5 text-sm'>
                 <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                     <Link href={'/'} className='mr-5 hover:text-gray-900'>
                         Home page
                     </Link>
                     <Link
                         href={'/products'}
                         className='mr-5 hover:text-gray-900 '
                     >
                         add products
                     </Link>
                     <Link
                         href={'/profile'}
                         className='mr-5 hover:text-gray-900 '
                     >
                         Profile
                     </Link>
                 </nav>
                 <Link href={'/shopping-cart'}>
                     <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
                         My bag
                     </button>
                 </Link>
             </div>
         </header>
     )   
    
};

export default Navbar;

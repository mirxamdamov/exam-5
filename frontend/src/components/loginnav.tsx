import Image from "next/image";
import Link from "next/link";

const LoginNav = () => {
    return (
        <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>
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
                </nav>
                <nav>
                    <Link href={'/signup'}>
                        <button className='button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
                            Signup
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default LoginNav
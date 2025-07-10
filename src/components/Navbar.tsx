import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
    return (
        <header className='bg-white shadow sticky top-0 z-50'>
            <nav className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center'>
                {/* Left: Logo */}
                <Link to="/" className='text-xl font-bold text-blue-600 tracking-wide'>SwamiCart 🛍️</Link>

                {/* Right: Navigation links */}
                <div className='space-x-4 text-sm font-medium text-gray-700'>
                    <Link
                        to={"/"}
                        className='hover:text-blue-700 transition duration-200'
                    >
                        Home
                    </Link>

                    <Link
                        to={"/about"}
                        className='hover:text-blue-700 transition duration-200'
                    >
                        About
                    </Link>
                    <Link
                        to={"/cart"}
                        className='hover:text-blue-700 transition duration-200'
                    >
                        Cart
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

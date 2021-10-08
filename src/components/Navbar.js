import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'About', to: '/about' },
        { id: 3, text: 'Service', to: '/service' },
        { id: 4, text: 'Contact', to: '/contact' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <header>
            {/* desktop nav  */}
            <nav className="flex items-center px-12 bg-white border-b border-gray-300 py-3">
                {/* brand  */}
                <div className="flex items-center space-x-2 flex-grow">
                    <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="logo" className="w-12 h-12" />
                    <h1 className="text-xl font-semibold text-gray-700 select-none">Navbar</h1>
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-3">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <a href={item.to} className="text-gray-600 text-lg">{item.text}</a>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700">Signup</button>
                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 text-white cursor-pointer bg-blue-600 rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-gray-50 py-4 block md:hidden lg:hidden">
                        <ul>
                            {menu.map(item => (
                                <a key={item.id} href={item.to} className="text-gray-600 text-lg">
                                    <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                                        {item.text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {/* button  */}
                        <div className="px-3 py-2">
                            <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700 w-full">Signup</button>
                        </div>
                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default Navbar

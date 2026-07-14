import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='pt-5 left-0 w-full z-50 px-4'>
            <div className="container mx-auto max-w-7xl">
                <div className='navbar rounded-full bg-black/5 backdrop-blur-xl border border-black/10 shadow-lg px-6'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <Link href={'/'}><Image src={logo} alt='logo' width={100} height={90} ></Image></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Item 1</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2 bg-base-100 w-40 z-1">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </header>


    );
};

export default Navbar;
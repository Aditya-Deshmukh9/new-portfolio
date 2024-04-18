"use client"
import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll";
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';


function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { to: "Home", text: "Home" },
        { to: "about", text: "About" },
        { to: "projects", text: "Projects" },
        { to: "contact", text: "Contact" },
    ];


    return (
        <header className="bg-white dark:bg-slate-950 dark:text-white sm:fixed top-0 w-full z-10 sticky">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="flex items-center justify-between h-16 font-semibold">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-indigo-500 cursor-pointer"
                        >
                            AD.
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4 ">
                        {navLinks.map((e, index) => (
                            <ScrollLink
                                key={index}
                                to={e.to}
                                className="p-4 border-b-2 border-indigo-700 border-opacity-0 hover:border-opacity-100 hover:text-indigo-600 duration-200 cursor-pointer active"
                            >
                                {e.text}
                            </ScrollLink>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X size={25} className="duration-75 text-xl text-gray-600 dark:text-white" />
                            ) : (
                                <AlignRight size={25} className="duration-75 text-xl text-gray-600 dark:text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute bg-white dark:bg-black dark:text-white top-16 left-0 right-0">
                    <div className="flex flex-col items-center">
                        {navLinks.map((e, index) => (
                            <ScrollLink key={index} to={e.to} className="p-4 hover:bg-gray-200">
                                {e.text}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
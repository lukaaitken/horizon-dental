import { useState } from 'react';
import { Link } from 'react-router-dom';
import HorizonIcon from '../assets/HorizonIcon.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={HorizonIcon}
                        alt="Horizon Dental Logo"
                        className="h-10"
                    />
                    <div className="text-2xl font-bold text-orange-500 ml-2 mt-1">
                        Horizon Dental
                    </div>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    <Link className="text-gray-700 hover:text-orange-500" to="/">Home</Link>
                    <Link className="text-gray-700 hover:text-orange-500" to="/about-us">About Us</Link>
                    <Link className="text-gray-700 hover:text-orange-500" to="/services">Services</Link>
                    <Link className="text-gray-700 hover:text-orange-500" to="/our-dentist">Our Dentist</Link>
                    <Link className="text-gray-700 hover:text-orange-500" to="/contact-us">Contact Us</Link>
                </div>

                {/* Mobile hamburger button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-700 hover:text-orange-500 focus:outline-none"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
                    <Link className="block text-gray-700 hover:text-orange-500" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link className="block text-gray-700 hover:text-orange-500" to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link className="block text-gray-700 hover:text-orange-500" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link className="block text-gray-700 hover:text-orange-500" to="/our-dentist" onClick={() => setIsOpen(false)}>Our Dentist</Link>
                    <Link className="block text-gray-700 hover:text-orange-500" to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </div>
            )}
        </nav>
    );
}

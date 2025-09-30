import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HorizonIcon from '../assets/HorizonIcon.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Classes for desktop links
    const desktopLinkClasses = ({ isActive }) =>
        isActive
            ? "text-orange-500 whitespace-nowrap"
            : "text-gray-700 hover:text-orange-500 whitespace-nowrap";

    // Classes for mobile links
    const mobileLinkClasses = ({ isActive }) =>
        isActive
            ? "block px-4 py-2 text-orange-500"
            : "block px-4 py-2 text-gray-700 hover:text-orange-500";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <img src={HorizonIcon} alt="Horizon Dental Logo" className="h-10" />
                    <div className="text-2xl font-bold text-orange-500 ml-2 mt-1">
                        Horizon Dental
                    </div>
                </div>

                {/* Desktop menu - CENTERED */}
                <div className="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                    <NavLink to="/" className={desktopLinkClasses}>Home</NavLink>
                    <NavLink to="/about-us" className={desktopLinkClasses}>About Us</NavLink>
                    <NavLink to="/services" className={desktopLinkClasses}>Services</NavLink>
                    <NavLink to="/our-dentist" className={desktopLinkClasses}>Our Dentists</NavLink>
                    <NavLink to="/contact-us" className={desktopLinkClasses}>Contact Us</NavLink>
                </div>

                {/* Mobile hamburger button */}
                <div className="lg:hidden">
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
                <div className="lg:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
                    <NavLink to="/" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about-us" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink>
                    <NavLink to="/services" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Services</NavLink>
                    <NavLink to="/our-dentist" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Our Dentists</NavLink>
                    <NavLink to="/contact-us" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                </div>
            )}
        </nav>
    );
}

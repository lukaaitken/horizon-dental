import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-orange-500">Horizon Dental</div>
      <div className="space-x-6">
        <Link className="text-gray-700 hover:text-orange-500" to="/">Home</Link>
        <Link className="text-gray-700 hover:text-orange-500" to="/about-us">About Us</Link>
        <Link className="text-gray-700 hover:text-orange-500" to="/services">Services</Link>
        <Link className="text-gray-700 hover:text-orange-500" to="/our-dentist">Our Dentist</Link>
        <Link className="text-gray-700 hover:text-orange-500" to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
}

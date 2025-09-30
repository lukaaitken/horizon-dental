import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Work1 from '../assets/Work/About-Us-sm_opt.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-0">
      <HeroBanner />

      {/* Mission */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="max-w-2xl mx-auto">
          Providing gentle, modern, and high-quality dental care for your whole family.
        </p>
        <button
          onClick={() => navigate("/about-us")}
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Learn More About Us
        </button>

      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded">General Dentistry</div>
          <div className="p-6 bg-white shadow rounded">Cosmetic Dentistry</div>
          <div className="p-6 bg-white shadow rounded">Orthodontics</div>
          <div className="p-6 bg-white shadow rounded">Pediatric Dentistry</div>
          <div className="p-6 bg-white shadow rounded">Dental Implants</div>
          <div className="p-6 bg-white shadow rounded">Emergency Care</div>
        </div>
        <button
          onClick={() => navigate("/services")}
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          View All Services
        </button>
      </section>

      {/* Meet Dentist */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Meet Our Dentists
        </h2>
        <img src={Work1} alt="Our Dentist" className="mx-auto rounded-lg shadow-md w-64" />
        <p className="mt-4">Dr. JLo, passionate about healthy teeth and happy patients.</p>
        <button
          onClick={() => navigate("/our-dentist")}
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Learn More
        </button>
      </section>

      {/* Call-to-Action */}
      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Ready to Book Your Visit?</h2>
        <p className="mt-2">Contact us today to schedule an appointment.</p>
        <button
          onClick={() => navigate("/contact-us")}
          className="mt-6 px-6 py-2 bg-white text-orange-500 rounded hover:bg-gray-100"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

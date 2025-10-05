import GroupPhoto from "../assets/Doctors/AboutUsGroup.png";
import { useNavigate } from "react-router-dom";
export default function AboutUs() {

  const navigate = useNavigate();
  return (
    <div className="p-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">About Horizon Dental</h1>
        <p className="text-lg text-gray-600">
          Your trusted dental care provider for healthy, confident smiles.
        </p>
      </div>

      {/* Image + Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src={GroupPhoto}
          alt="Horizon Dental Clinic"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            At Horizon Dental, we believe dentistry should be comfortable, modern,
            and family-focused. Our skilled team is committed to providing
            high-quality care while making every patient feel welcome. We stay
            up to date with the latest advances in dentistry so you can enjoy
            the best possible treatment options in a safe and friendly environment.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose Horizon Dental?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded shadow hover:shadow-md">
            <h3 className="font-semibold mb-2 text-orange-500">Compassionate Care</h3>
            <p className="text-sm text-gray-600">
              We treat every patient like family, ensuring a stress-free visit.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-md">
            <h3 className="font-semibold mb-2 text-orange-500">Modern Technology</h3>
            <p className="text-sm text-gray-600">
              Our clinic uses the latest tools and techniques for better outcomes.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-md">
            <h3 className="font-semibold mb-2 text-orange-500">Experienced Team</h3>
            <p className="text-sm text-gray-600">
              Our dentists and staff bring years of expertise to every treatment.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-md">
            <h3 className="font-semibold mb-2 text-orange-500">Family-Friendly</h3>
            <p className="text-sm text-gray-600">
              From kids to seniors, we provide care tailored to every stage of life.
            </p>
          </div>
        </div>
      </div>
      {/* Call-to-Action */}
      <div className="text-center">
        <button
          onClick={() => navigate("/contact-us")}
          className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
}
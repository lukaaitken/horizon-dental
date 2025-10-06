import ReceptionImg from "../assets/Building/build2.png"; // adjust path
import { useNavigate } from "react-router-dom";


export default function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="p-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <img
        src={ReceptionImg}
        alt="Horizon Dental Reception Area"
        className="rounded-lg shadow-md w-full object-cover"
      />

      <div>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4"><strong>Horizon Dental</strong></p>
        <p>123 Queensmen</p>
        <p>Prince George, BC</p>
        <p>V2M 0A8</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Hours</h2>
          <p>Monday - Saturday, 7am - 6pm</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Phone</h2>
          <p>
            Call us:{" "}
            <a href="tel:2509602231" className="text-orange-600">
              123.456.7890
            </a>
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate("/send-message")}
            className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Send Us a Message
          </button>
        </div>
      </div>
    </div>
  );
}
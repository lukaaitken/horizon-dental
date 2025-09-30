import { useState } from "react";  // ✅ add this import

function Service({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold text-xl">{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="mt-4 text-gray-700">{children}</div>}
    </div>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Our Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Click on a service to learn more about the treatments we provide to keep your smile healthy and bright.
        </p>

        <div className="max-w-5xl mx-auto">
          <Service title="General Dentistry">
            <p className="mb-2">
              Preventative hygiene, fillings, root canals, extractions, and more.
            </p>
            <ul className="list-disc list-inside">
              <li>Preventative Hygiene</li>
              <li>Oral Hygiene Guidelines</li>
              <li>Fillings & Bondings</li>
              <li>Root Canal Treatment</li>
              <li>Oral Surgery & Extractions</li>
            </ul>
          </Service>

          <Service title="Orthodontics">
            <ul className="list-disc list-inside">
              <li>Clear Aligners</li>
              <li>Traditional Braces</li>
            </ul>
          </Service>

          <Service title="Cosmetic Dentistry">
            <ul className="list-disc list-inside">
              <li>Teeth Whitening</li>
              <li>Crowns & Caps</li>
              <li>Veneers</li>
              <li>Bridges</li>
              <li>Full Mouth Rejuvenation</li>
              <li>Botox®</li>
            </ul>
          </Service>

          <Service title="Specialized Treatments">
            <ul className="list-disc list-inside">
              <li>Sleep Apnea & Snoring Appliances</li>
              <li>Fissure Sealants</li>
              <li>Sedation Dentistry</li>
              <li>Dentures</li>
            </ul>
          </Service>

          <Service title="Emergency Care">
            <p>
              Same-day urgent dental support during office hours and 24/7 on-call emergency coverage.
            </p>
          </Service>
        </div>
      </div>
    </section>
  );
}

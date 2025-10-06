import { useState } from "react";

export default function SendMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p>Your message has been sent. We’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Send Us a Message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Name*</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your Email Address*</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm Email*</label>
          <input
            type="email"
            name="confirmEmail"
            required
            value={formData.confirmEmail}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message*</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

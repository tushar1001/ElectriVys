import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-5xl font-bold text-[#ff6600] mb-8 text-center drop-shadow-lg">
        Get in Touch 📩
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-4xl w-full grid md:grid-cols-2 gap-8 transition-all duration-300">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 text-gray-700">
          <div className="flex items-center space-x-4 text-lg">
            <FaEnvelope className="text-[#ff6600] text-2xl" />
            <span className="hover:text-[#e65c00] transition-all">support@electrivys.com</span>
          </div>
          <div className="flex items-center space-x-4 text-lg">
            <FaPhone className="text-[#ff6600] text-2xl" />
            <span className="hover:text-[#e65c00] transition-all">+91 9717418636</span>
          </div>
          <div className="flex items-center space-x-4 text-lg">
            <FaMapMarkerAlt className="text-[#ff6600] text-2xl" />
            <span className="hover:text-[#e65c00] transition-all">Cyber Park, Gurgaon</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:outline-none transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:outline-none transition-all duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:outline-none transition-all duration-200"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#ff6600] text-white rounded-lg font-semibold shadow-md hover:bg-[#e65c00] hover:scale-105 transition-all duration-300"
          >
            Send Message 🚀
          </button>
          {submitted && (
            <p className="text-green-600 text-center font-semibold text-lg animate-fade-in">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

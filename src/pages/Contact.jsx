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
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-10 text-green-800">
      <h1 className="text-3xl sm:text-5xl font-bold text-green-700 mb-6 sm:mb-8 text-center">
        Get in Touch 📩
      </h1>

      <div className="bg-green-100 shadow-2xl rounded-2xl p-6 sm:p-10 max-w-lg sm:max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border border-green-400">
        {/* Contact Info */}
        <div className="flex flex-col space-y-4 sm:space-y-6 text-green-700">
          <div className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-lg">
            <FaEnvelope className="text-green-600 text-xl sm:text-2xl" />
            <span className="hover:text-green-800 transition-all">support@electrivys.com</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-lg">
            <FaPhone className="text-green-600 text-xl sm:text-2xl" />
            <span className="hover:text-green-800 transition-all">+91 9717418636</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-sm sm:text-lg">
            <FaMapMarkerAlt className="text-green-600 text-xl sm:text-2xl" />
            <span className="hover:text-green-800 transition-all">Cyber Park, Gurgaon</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 sm:p-4 border border-green-400 rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none transition-all duration-200 bg-white text-green-900 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 sm:p-4 border border-green-400 rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none transition-all duration-200 bg-white text-green-900 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 sm:p-4 border border-green-400 rounded-lg shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none transition-all duration-200 bg-white text-green-900 w-full"
          ></textarea>
          <button
            type="submit"
            className="px-5 sm:px-6 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300 w-full"
          >
            Send Message 🚀
          </button>
          {submitted && (
            <p className="text-green-700 text-center font-semibold text-lg animate-fade-in">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

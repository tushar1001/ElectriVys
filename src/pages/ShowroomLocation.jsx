import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cityShowrooms = {
  Delhi: [
    {
      brand: "Ola Electric",
      name: "Ola Delhi Showroom",
      address: "Connaught Place, New Delhi",
      location: "https://goo.gl/maps/delhi123",
      image: "/images/ola-delhi.jpg",
    },
    {
      brand: "Hero Electric",
      name: "Hero Delhi Showroom",
      address: "Karol Bagh, New Delhi",
      location: "https://goo.gl/maps/delhi-hero123",
      image: "/images/hero-delhi.jpg",
    },
    {
      brand: "Ather Energy",
      name: "Ather Delhi Showroom",
      address: "Dwarka, New Delhi",
      location: "https://goo.gl/maps/delhi-ather123",
      image: "/images/ather-delhi.jpg",
    },
  ],
  Noida: [
    {
      brand: "Ather Energy",
      name: "Ather Noida Showroom",
      address: "Sector 18, Noida",
      location: "https://goo.gl/maps/noida-ather123",
      image: "/images/ather-noida.jpg",
    },
    {
      brand: "Hero Electric",
      name: "Hero Noida Showroom",
      address: "Sector 62, Noida",
      location: "https://goo.gl/maps/noida-hero123",
      image: "/images/hero-noida.jpg",
    },
  ],
  Gurgaon: [
    {
      brand: "Ola Electric",
      name: "Ola Gurgaon Showroom",
      address: "MG Road, Gurgaon",
      location: "https://goo.gl/maps/gurgaon-ola123",
      image: "/images/ola-gurgaon.jpg",
    },
    {
      brand: "Ather Energy",
      name: "Ather Gurgaon Showroom",
      address: "Golf Course Road, Gurgaon",
      location: "https://goo.gl/maps/gurgaon-ather123",
      image: "/images/ather-gurgaon.jpg",
    },
    {
      brand: "Bajaj Chetak",
      name: "Bajaj Gurgaon Showroom",
      address: "DLF Cyber Hub, Gurgaon",
      location: "https://goo.gl/maps/gurgaon-bajaj123",
      image: "/images/bajaj-gurgaon.jpg",
    },
  ],
  Mumbai: [
    {
      brand: "Ola Electric",
      name: "Ola Mumbai Showroom",
      address: "Andheri West, Mumbai",
      location: "https://goo.gl/maps/mumbai-ola123",
      image: "/images/ola-mumbai.jpg",
    },
    {
      brand: "Ather Energy",
      name: "Ather Mumbai Showroom",
      address: "Bandra, Mumbai",
      location: "https://goo.gl/maps/mumbai-ather123",
      image: "/images/ather-mumbai.jpg",
    },
  ],
  Bangalore: [
    {
      brand: "Ola Electric",
      name: "Ola Bangalore Showroom",
      address: "Indiranagar, Bangalore",
      location: "https://goo.gl/maps/bangalore-ola123",
      image: "/images/ola-bangalore.jpg",
    },
    {
      brand: "Ather Energy",
      name: "Ather Bangalore Showroom",
      address: "MG Road, Bangalore",
      location: "https://goo.gl/maps/bangalore-ather123",
      image: "/images/ather-bangalore.jpg",
    },
  ],
  Pune: [
    {
      brand: "Bajaj Chetak",
      name: "Bajaj Pune Showroom",
      address: "Shivaji Nagar, Pune",
      location: "https://goo.gl/maps/pune-bajaj123",
      image: "/images/bajaj-pune.jpg",
    },
    {
      brand: "Ola Electric",
      name: "Ola Pune Showroom",
      address: "FC Road, Pune",
      location: "https://goo.gl/maps/pune-ola123",
      image: "/images/ola-pune.jpg",
    },
  ],
  Hyderabad: [
    {
      brand: "Ather Energy",
      name: "Ather Hyderabad Showroom",
      address: "Banjara Hills, Hyderabad",
      location: "https://goo.gl/maps/hyderabad-ather123",
      image: "/images/ather-hyderabad.jpg",
    },
    {
      brand: "Ola Electric",
      name: "Ola Hyderabad Showroom",
      address: "Hitech City, Hyderabad",
      location: "https://goo.gl/maps/hyderabad-ola123",
      image: "/images/ola-hyderabad.jpg",
    },
  ],
};

const ShowroomLocation = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  return (
    <div className="min-h-screen bg-gray-50 pt-24 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          EV Showroom Locations⚡
        </h1>

        {/* Dropdown for selecting a city */}
        <div className="mb-6 flex justify-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Choose a City</option>
            {Object.keys(cityShowrooms).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Showroom Cards */}
        {selectedCity && cityShowrooms[selectedCity] && (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cityShowrooms[selectedCity].map((showroom, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={showroom.image}
                  alt={showroom.name}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {showroom.name}
                  </h3>
                  <p className="text-gray-600">{showroom.address}</p>
                  <a
                    href={showroom.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-green-500 hover:text-green-700 transition"
                  >
                    <MapPin size={18} className="mr-1" /> View on Google Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShowroomLocation;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cityShowrooms = {
  Delhi: [
    { brand: "Ather Energy", name: "Ather Delhi Showroom", address: "Dwarka, New Delhi", location: "", image: "ather-delhi.jpg" },
    { brand: "Hero Electric", name: "Hero Delhi Showroom", address: "Karol Bagh, New Delhi", location: "", image: "hero-delhi.jpg" },
    { brand: "Ola Electric", name: "Ola Delhi Showroom", address: "Connaught Place, New Delhi", location: "", image: "ola-delhi.jpg" },
  ],
  Noida: [
    { brand: "Ather Energy", name: "Ather Noida Showroom", address: "Sector 18, Noida", location: "", image: "ather-noida.jpg" },
    { brand: "Hero Electric", name: "Hero Noida Showroom", address: "Sector 62, Noida", location: "", image: "hero-noida.jpg" },
  ],
  Mumbai: [
    { brand: "Ather Energy", name: "Ather Mumbai Showroom", address: "Bandra, Mumbai", location: "", image: "ather-mumbai.jpg" },
    { brand: "Ola Electric", name: "Ola Mumbai Showroom", address: "Andheri West, Mumbai", location: "", image: "ola-mumbai.jpg" },
  ],
  Bangalore: [
    { brand: "Ather Energy", name: "Ather Bangalore Showroom", address: "MG Road, Bangalore", location: "", image: "ather-bangalore.jpg" },
    { brand: "Ola Electric", name: "Ola Bangalore Showroom", address: "MG Road, Bangalore", location: "", image: "ola-bangalore.jpg" },
  ],
  Gurgaon: [
    { brand: "Ather Energy", name: "Ather Gurgaon Showroom", address: "Cyber Hub, Gurgaon", location: "", image: "ather-gurgaon.jpg" },
    { brand: "Ola Electric", name: "Ola Gurgaon Showroom", address: "Golf Course Road, Gurgaon", location: "", image: "ola-gurgaon.jpg" },
    { brand: "Bajaj", name: "Bajaj Gurgaon Showroom", address: "MG Road, Gurgaon", location: "", image: "bajaj-gurgaon.jpg" },
  ],
  Hyderabad: [
    { brand: "Ather Energy", name: "Ather Hyderabad Showroom", address: "Banjara Hills, Hyderabad", location: "", image: "ather-hyderabad.jpg" },
    { brand: "Ola Electric", name: "Ola Hyderabad Showroom", address: "Hitech City, Hyderabad", location: "", image: "ola-hyderabad.jpg" },
  ],
  Pune: [
    { brand: "Ola Electric", name: "Ola Pune Showroom", address: "Shivaji Nagar, Pune", location: "", image: "ola-pune.jpg" },
    { brand: "Bajaj", name: "Bajaj Pune Showroom", address: "FC Road, Pune", location: "", image: "bajaj-pune.jpg" },
  ],
};

const ShowroomLocation = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 pt-24 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-6">
          EV Showroom Locations ⚡
        </h1>

        <div className="mb-6 flex justify-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="p-3 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-green-900"
          >
            {Object.keys(cityShowrooms).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {selectedCity && cityShowrooms[selectedCity] && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cityShowrooms[selectedCity].map((showroom, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 border border-green-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img
                    src={`/images/${showroom.image}`}
                    alt={showroom.name}
                    className="w-full h-52 object-cover rounded-t-xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-800">{showroom.name}</h3>
                  <p className="text-green-700 mt-1">{showroom.address}</p>
                  <button
                    onClick={() => navigate("/")}
                    className="mt-3 inline-flex items-center text-green-600 hover:text-green-800 transition"
                  >
                    <MapPin size={20} className="mr-2" /> View on Google Maps
                  </button>
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
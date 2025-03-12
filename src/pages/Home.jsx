import { useState } from "react";
import { Link } from "react-router-dom";
import EVCard from "../components/EVCard";
import evOptions from "../data/evOptions";
import UserJourneyPopup from "../components/UserJourneyPopup";
import FilterBar from "../components/FilterBar";
import { motion } from "framer-motion";

const Home = () => {
  const [filteredEVs, setFilteredEVs] = useState(evOptions);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFilterChange = (filters) => {
    const filtered = evOptions.filter((ev) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key] || filters[key] === "All") return true;
        if (key === "range") return ev.range === filters[key];
        if (key === "type") return ev.type === filters[key];
        if (key === "brand") return ev.brand === filters[key];
        if (key === "battery") return ev.battery === filters[key];
        return ev[key] === filters[key];
      });
    });
    setFilteredEVs(filtered);
    setVisibleCount(8);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-[#66cc99] text-white text-center py-20 mt-20 md:py-26 px-6 sm:mt-24">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover Your Perfect EV
          </h1>
          <h4 className="text-lg md:text-xl italic mt-3 opacity-90">
            ⚡ Software on Wheels
          </h4>
          <p className="mt-4 text-md md:text-lg opacity-90">
            Find the ideal electric two-wheeler and compatible charging stations
            near you.
          </p>
          <motion.button
            onClick={() => setIsPopupOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-[#66cc99] px-6 py-3 rounded-lg font-bold shadow-md 
                      hover:bg-gray-200 transition duration-300"
          >
            Get Started 🚀
          </motion.button>
        </motion.div>
      </section>

      {/* Popup Component */}
      <UserJourneyPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* EV Filter Bar */}
      <section className="container mx-auto my-10 px-4">
        <motion.div
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Find Your Perfect EV
          </h2>
          <FilterBar onFilterChange={handleFilterChange} />
        </motion.div>
      </section>

      {/* EV Cards Section */}
      <section className="container mx-auto px-4 pb-12">
        {filteredEVs.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredEVs.slice(0, visibleCount).map((ev, index) => (
                <EVCard key={index} ev={ev} />
              ))}
            </motion.div>

            {/* View More Button */}
            {visibleCount < filteredEVs.length && (
              <div className="flex justify-center mt-8">
                <motion.button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#ff6600] to-[#ff4500] 
                             text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View More EVs 🚀
                </motion.button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg animate-pulse">
            No results found. Try different filters.
          </p>
        )}
      </section>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EVCard from "../components/EVCard";
import evOptions from "../data/evOptions";
import UserJourneyPopup from "../components/UserJourneyPopup";
import FilterBar from "../components/FilterBar";
import NewsSection from "../components/NewsSection";

const Home = () => {
  const [filteredEVs, setFilteredEVs] = useState(evOptions);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  const handleFilterChange = (filters) => {
    const filtered = evOptions.filter((ev) =>
      Object.keys(filters).every((key) => {
        if (!filters[key] || filters[key] === "All") return true;
        return ev[key] === filters[key];
      })
    );
    setFilteredEVs(filtered);
    setVisibleCount(8);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#009688] to-[#4CAF50] text-white text-center py-24 sm:py-32 px-6 mt-12 sm:mt-18 rounded-b-3xl shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.div
          className="relative max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Drive the Future with Electric Power ⚡
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light opacity-90">
            Discover the best electric two-wheelers & charging stations tailored for you.
          </p>
          <motion.button
            onClick={() => setIsPopupOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-[#009688] px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-200 transition duration-300"
          >
            Get Started 🛵
          </motion.button>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-16 sm:h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,154.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160V320H0Z" />
          </svg>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Popup Component */}
      <UserJourneyPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* EV Filter Bar */}
      <section className="container mx-auto my-10 px-4">
        <motion.div
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Find Your Perfect EV</h2>
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
                  className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#ff6600] to-[#ff4500] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View More EVs 🛵
                </motion.button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg animate-pulse">No results found. Try different filters.</p>
        )}
      </section>
    </div>
  );
};

export default Home;

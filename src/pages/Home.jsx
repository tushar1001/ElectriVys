import { useState } from "react";
import { Link } from "react-router-dom";
import EVCard from "../components/EVCard";
import evOptions from "../data/evOptions";
import UserJourneyPopup from "../components/UserJourneyPopup";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [filteredEVs, setFilteredEVs] = useState(evOptions);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFilterChange = (filters) => {
    const filtered = evOptions.filter((ev) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key] || filters[key] === "All") return true;
        if (key === "range") {
          return (
            (filters[key] === "0-50 km" && ev.range === "0-50 km") ||
            (filters[key] === "50-100 km" && ev.range === "50-100 km") ||
            (filters[key] === "100-200 km" && ev.range === "100-200 km") ||
            (filters[key] === "200+ km" && ev.range === "200+ km")
          );
        }
        if (key === "type") {
          return ev.type === filters[key];
        }
        if (key === "brand") {
          return ev.brand === filters[key];
        }
        if (key === "battery") {
          return ev.battery === filters[key];
        }
        return ev[key] === filters[key];
      });
    });
    setFilteredEVs(filtered);
    setVisibleCount(8);
  };



  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-[#66cc99] text-white text-center py-20 mt-22 md:mt-18 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-md">
            Discover Your Perfect EV
          </h1>
          <h4 className="text-xl italic mt-3 opacity-90">⚡ Software on Wheels</h4>
          <p className="mt-4 text-lg opacity-90">
            Find the ideal electric two-wheeler and compatible charging stations near you.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="mt-6 inline-block bg-white text-[#66cc99] px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-200 hover:scale-105 transition duration-300"
          >
            Get Started 🚀
          </button>
        </div>
      </section>

      {/* Popup Component */}
      <UserJourneyPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* EV Filter Bar */}
      <section className="container mx-auto my-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-gray-200 transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-800">Find Your Perfect EV</h2>
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* EV Cards Section */}
      <section className="container mx-auto px-6 transition-all duration-300">
        {filteredEVs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredEVs.slice(0, visibleCount).map((ev, index) => (
                <EVCard key={index} ev={ev} />
              ))}
            </div>

            {/* View More Button */}
            {visibleCount < filteredEVs.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="px-6 py-3 text-lg font-semibold flex items-center gap-2 bg-gradient-to-r from-[#ff6600] to-[#ff4500] text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <span> View More EVs</span>
                </button>
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

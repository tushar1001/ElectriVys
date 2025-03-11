import React, { useState } from "react";
import EVList from "../components/EVList";
import evOptions from "../data/evOptions";

const EVModels = () => {
  const [visibleEVs, setVisibleEVs] = useState(8);

  return (
    <div className="container mx-auto px-4 py-16">
      <EVList evs={evOptions.slice(0, visibleEVs)} />

      {visibleEVs < evOptions.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleEVs(visibleEVs + 8)} // ✅ Load 8 more on click
            className="px-6 py-3 bg-[#66cc99] text-white rounded-lg font-semibold shadow-md hover:bg-[#57b88f] hover:scale-105 transition-all duration-300"
          >
            View More EVs 🚗
          </button>
        </div>
      )}
    </div>
  );
};

export default EVModels;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import EVComparison from "../components/EVComparison";

const EVDetails = ({ evData }) => {
  const { id } = useParams();
  const [firstEV, setFirstEV] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const defaultEV = evData.find((item) => item.id.toString() === id);
    setFirstEV(defaultEV);
  }, [id, evData]);

  if (!firstEV) {
    return <p className="text-center text-gray-600 mt-10 text-lg md:text-xl">EV not found.</p>;
  }

  if (showComparison) {
    return <EVComparison firstEV={firstEV} evData={evData} setShowComparison={setShowComparison} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 md:pt-16 px-6 md:px-12 bg-gradient-to-br from-white to-green-50 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-green-100/40 blur-3xl opacity-40"></div>

      {/* Page Title */}
      <motion.h2
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-lg sm:text-4xl font-bold mb-6 md:mb-10 text-center tracking-wider text-green-800 drop-shadow-lg whitespace-nowrap overflow-hidden text-ellipsis"
>
  ⚡{firstEV.brand} {firstEV.model}⚡
</motion.h2>

      {/* EV Details Container */}
      <div className="w-full max-w-4xl md:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-green-300/50 relative z-10">
        {/* EV Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={firstEV.image}
          alt={firstEV.model}
          className="w-full h-56 md:h-[350px] object-cover rounded-2xl shadow-md transition-transform hover:scale-105"
        />

        {/* EV Information */}
        <div className="flex flex-col space-y-4 md:space-y-5 text-gray-800">
          <h3 className="text-3xl md:text-4xl font-semibold text-green-700">
            {firstEV.brand} {firstEV.model}
          </h3>

          <div className="space-y-2 md:space-y-3 text-base md:text-lg">
            <p>
              <span className="font-semibold text-green-600">🔋 Battery:</span> {firstEV.battery} kWh
            </p>
            <p>
              <span className="font-semibold text-green-600">⚡ Range:</span> {firstEV.range} km
            </p>
            <p>
              <span className="font-semibold text-green-600">🚀 Top Speed:</span> {firstEV.topSpeed} km/h
            </p>
            <p className="text-lg md:text-2xl font-bold bg-green-100 text-green-900 p-3 rounded-lg shadow-md">
              💰 Price: {firstEV.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 md:px-6 py-2 md:py-2.5 bg-green-600 text-white rounded-xl font-medium text-sm md:text-lg shadow-md hover:bg-green-700 transition"
            >
              Buy Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 md:px-6 py-2 md:py-2.5 bg-orange-500 text-white rounded-xl font-medium text-sm md:text-lg shadow-md hover:bg-orange-700 transition"
            >
              Book Test Ride
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowComparison(true)}
              className="px-5 md:px-6 py-2 md:py-2.5 bg-blue-500 text-white rounded-xl font-medium text-sm md:text-lg shadow-md hover:bg-blue-700 transition"
            >
              Compare EVs
            </motion.button>
          </div>

          {/* Back to Home */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-green-600 text-sm md:text-lg font-semibold hover:underline">
              ⬅ Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVDetails;

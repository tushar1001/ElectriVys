import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EVDetails = ({ evData }) => {
  const { id } = useParams();
  const ev = evData.find(item => item.id.toString() === id);

  if (!ev) {
    return <p className="text-center text-gray-600 mt-10">EV not found.</p>;
  }

  const handleAction = (action) => {
    toast.success(`${action} Successful!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)] bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* EV Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={ev.image}
          alt={ev.model}
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        
        {/* EV Details */}
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900"
          >
            {ev.brand} {ev.model}
          </motion.h1>

          <div className="mt-6 space-y-3 text-xl">
            <p><span className="font-semibold">🔋 Battery:</span> {ev.battery} kWh</p>
            <p><span className="font-semibold">⚡ Range:</span> {ev.range} km</p>
            <p><span className="font-semibold">🚀 Top Speed:</span> {ev.topSpeed} km/h</p>
            <p><span className="font-semibold">💰 Price:</span> {ev.price}</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <button
              onClick={() => handleAction("Purchase")}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-xl shadow-md hover:bg-orange-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAction("Booking")}
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-xl shadow-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
          
          {/* Back to Home */}
          <div className="mt-6">
            <Link to="/" className="text-blue-600 text-lg hover:underline">⬅ Go Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVDetails;

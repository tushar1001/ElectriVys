import React from "react";
import { Link } from "react-router-dom";

const EVCard = ({ ev }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-5 w-full max-w-xs sm:max-w-sm md:w-80 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
      
      {/* EV Image */}
      <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={ev.image}
          alt={ev.model}
          className="w-full h-full object-contain p-3 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* EV Details */}
      <h3 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4 text-gray-900">
        {ev.brand} {ev.model}
      </h3>

      <span className="bg-green-600 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full mt-2 inline-block">
        {ev.type}
      </span>

      <p className="text-xs sm:text-sm text-gray-600 mt-2">
        ⚡ <span className="font-medium">Range:</span> {ev.range} km
      </p>

      {/* Price */}
      <div className="mt-3">
        <span className="bg-orange-500 text-white px-5 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-md">
          {ev.price}
        </span>
      </div>

      {/* Button */}
      <Link to={`/ev-details/${ev.id}`}>
        <button className="mt-4 sm:mt-5 px-4 sm:px-5 py-2 w-full bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 hover:scale-105">
          View Details
        </button>
      </Link>
      
    </div>
  );
};

export default EVCard;

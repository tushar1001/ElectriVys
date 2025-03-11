import React from "react";
import { Link } from "react-router-dom";

const EVCard = ({ ev }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full md:w-80 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={ev.image}
          alt={ev.model}
          className="w-full h-full object-contain p-3 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h3 className="text-lg font-semibold mt-4 text-gray-900">
        {ev.brand} {ev.model}
      </h3>

      <span className="bg-green-600 text-white px-4 py-1 text-xs font-semibold rounded-full mt-2 inline-block">
        {ev.type}
      </span>

      <p className="text-sm text-gray-600 mt-2">
        ⚡ <span className="font-medium">Range:</span> {ev.range} km
      </p>

      <div className="mt-3">
        <span className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-md">
          {ev.price}
        </span>
      </div>

      <Link to={`/ev-details/${ev.id}`}>
        <button className="mt-5 px-5 py-2 w-full bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 hover:scale-105">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default EVCard;

import React from "react";
import EVCard from "./EVCard";
import evOptions from "../data/evOptions";

const EVList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Electric Vehicles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {evOptions.map((ev, index) => (
          <EVCard key={index} ev={ev} />
        ))}
      </div>
    </div>
  );
};

export default EVList;

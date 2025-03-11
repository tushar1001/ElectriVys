import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import evOptions from "../data/evOptions";

const getUniqueValues = (key) => {
  return [...new Set(evOptions.map((ev) => ev[key]))].filter(Boolean);
};

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = (type, value) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [type]: value };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleRemoveFilter = (type) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      delete updatedFilters[type];
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-2xl border border-gray-200 w-full md:w-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-[#ff6600] transition-all"
        >
          <FaFilter className="text-[#ff6600]" /> Filter By
        </button>
        <select className="p-2 border rounded-lg text-gray-700 focus:ring-[#ff6600] transition-all">
          <option>Popularity</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Brand", key: "brand" },
            { label: "Model", key: "model" },
            { label: "Type", key: "type" },
            { label: "Range", key: "range" },
            { label: "Price", key: "price" },
            { label: "Battery", key: "battery" },
            { label: "Top Speed", key: "topSpeed" },
          ].map(({ label, key }) => (
            <select
              key={key}
              onChange={(e) => handleFilterClick(key, e.target.value)}
              className="border px-3 py-2 rounded-lg text-gray-700 font-medium bg-white focus:ring-[#ff6600] transition-all"
            >
              <option value="">{label}</option>
              {getUniqueValues(key).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}

      {/* Selected Filters */}
      {Object.keys(filters).length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {Object.entries(filters).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-200 px-4 py-2 flex items-center rounded-full shadow-md text-gray-800 font-medium"
            >
              {value}{" "}
              <IoClose
                className="ml-2 cursor-pointer hover:text-red-500 transition-all"
                onClick={() => handleRemoveFilter(key)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;

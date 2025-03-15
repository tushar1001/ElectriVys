import React, { useState } from "react";

const EVComparison = ({ firstEV, evData, setShowComparison }) => {
  const [selectedEV, setSelectedEV] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6 pt-32 md:pt-24">
      <h2 className="text-2xl md:text-5xl font-extrabold text-green-700 mb-10 text-center tracking-wide drop-shadow-md whitespace-nowrap overflow-hidden">
        ⚡ Compare Your EVs ⚡
      </h2>

      {/* Comparison Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-6xl bg-green-50 p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-300 hover:shadow-3xl transition-all">
        {/* Selected EV */}
        <div className="w-full md:w-1/2 flex flex-col items-center border p-6 rounded-xl shadow-xl bg-white hover:scale-105 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Your Selected EV</h3>
          <img src={firstEV.image} alt={firstEV.model} className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-xl shadow-lg" />
          <p className="font-semibold text-lg md:text-xl mt-4 text-gray-900">{firstEV.brand} {firstEV.model}</p>
        </div>

        {/* Select EV to Compare */}
        <div className="w-full md:w-1/2 flex flex-col items-center border p-6 rounded-xl shadow-xl bg-white hover:scale-105 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Select EV to Compare</h3>
          <select className="mt-3 w-full p-3 border border-gray-400 rounded-lg shadow-md bg-green-100 focus:ring-2 focus:ring-green-500 text-lg hover:bg-green-200 transition"
            onChange={(e) => {
              const selectedBike = evData.find((ev) => ev.id.toString() === e.target.value);
              setSelectedEV(selectedBike);
            }}>
            <option value="">Choose an EV</option>
            {evData.map((ev) => ev.id !== firstEV.id ? (
              <option key={ev.id} value={ev.id}>{ev.brand} {ev.model}</option>
            ) : null)}
          </select>

          {selectedEV && (
            <div className="mt-6">
              <img src={selectedEV.image} alt={selectedEV.model} className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-xl shadow-lg" />
              <p className="font-semibold text-lg md:text-xl mt-4 text-gray-900">{selectedEV.brand} {selectedEV.model}</p>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedEV && (
        <div className="w-full max-w-6xl mt-12 overflow-x-auto rounded-xl shadow-2xl border border-gray-300 bg-green-50">
          <table className="w-full text-center border-collapse border border-gray-400">
            <thead>
              <tr className="bg-green-700 text-white text-lg">
                <th className="p-4 md:p-6">Feature</th>
                <th className="p-4 md:p-6">{firstEV.model}</th>
                <th className="p-4 md:p-6">{selectedEV.model}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 text-gray-900 text-base md:text-lg">
              <tr><td className="p-4 md:p-6 font-medium">🔋 Battery</td><td className="p-4 md:p-6">{firstEV.battery} kWh</td><td className="p-4 md:p-6">{selectedEV.battery} kWh</td></tr>
              <tr><td className="p-4 md:p-6 font-medium">⚡ Range</td><td className="p-4 md:p-6">{firstEV.range} km</td><td className="p-4 md:p-6">{selectedEV.range} km</td></tr>
              <tr><td className="p-4 md:p-6 font-medium">🚀 Top Speed</td><td className="p-4 md:p-6">{firstEV.topSpeed} km/h</td><td className="p-4 md:p-6">{selectedEV.topSpeed} km/h</td></tr>
              <tr><td className="p-4 md:p-6 font-medium">💰 Price</td><td className="p-4 md:p-6">{firstEV.price}</td><td className="p-4 md:p-6">{selectedEV.price}</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Back Button */}
      <button onClick={() => setShowComparison(false)}
        className="mt-12 px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        ⬅ Back to EV Details
      </button>
    </div>
  );
};

export default EVComparison;

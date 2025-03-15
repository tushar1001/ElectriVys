import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EVModels from "./pages/EVModels";
import EVDetails from "./pages/EVDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ShowroomLocation from "./pages/ShowroomLocation";
import Pricing from "./pages/Pricing";
import evData from "./data/evOptions";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ev-models" element={<EVModels />} />
            <Route path="/ev-details/:id" element={<EVDetails evData={evData} />} />
            <Route path="/showroom-location" element={<ShowroomLocation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

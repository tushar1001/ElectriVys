import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import LogoAnimation from "./LogoAnimation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Define navigation links with correct paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "EV Models", path: "/ev-models" },
    { name: "Showroom Location", path: "/showroom-location" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Adjust body padding when menu is open */}
      <div className={`transition-all duration-300 ${isOpen ? "pb-64" : "pb-0"}`}>

        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0a2e06] to-[#064d1f] shadow-2xl z-50 backdrop-blur-lg border-b border-green-500/30">
          <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-10">
            
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center space-y-1">
              <LogoAnimation />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-white/10 border border-white/30 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 w-64 sm:w-80 focus-within:bg-white/20 transition-all shadow-lg">
              <input
                type="text"
                placeholder="Search for EV Models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent focus:outline-none w-full placeholder-gray-300 text-white text-sm sm:text-base"
              />
              <Search size={18} className="text-white cursor-pointer hover:text-gray-200 transition-all" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 sm:gap-8 text-sm sm:text-lg font-semibold">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="relative group text-white transition-all"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-2">
          <div className="flex items-center bg-white/10 border border-white/30 backdrop-blur-md rounded-full px-4 py-2 w-full focus-within:bg-white/20 transition-all shadow-lg">
            <input
              type="text"
              placeholder="Search for EV Models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-full placeholder-gray-300 text-white text-sm"
            />
            <Search size={18} className="text-white cursor-pointer hover:text-gray-200 transition-all" />
          </div>
        </div>

        {/* Mobile Sidebar Background Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#064d1f] to-[#031b0e] text-white shadow-xl transform transition-transform duration-500 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 items-center mt-16 text-lg font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  to={link.path}
                  className="block w-full text-center py-3 px-6 text-white transition-all hover:bg-green-500/20 hover:text-green-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

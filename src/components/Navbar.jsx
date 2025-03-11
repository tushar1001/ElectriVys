import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import LogoAnimation from "./LogoAnimation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0a2e06] to-[#064d1f] shadow-2xl z-50 backdrop-blur-lg border-b border-green-500/30">
      
      <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-10">
        <Link to="/" className="flex flex-col items-center space-y-1">
          <LogoAnimation />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/10 border border-white/30 backdrop-blur-md rounded-full px-5 py-2 w-80 focus-within:bg-white/20 transition-all shadow-lg">
          <input
            type="text"
            placeholder="Search for EV Models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent focus:outline-none w-full placeholder-gray-300 text-white"
          />
          <Search
            size={20}
            className="text-white cursor-pointer hover:text-gray-200 transition-all"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex gap-8 text-lg font-semibold">
          <Link to="/" className="relative group text-white transition-all">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
          </Link>

          {["EV Models", "Showroom Location", "Pricing", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative group text-white transition-all"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#064d1f] text-white shadow-xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-6 items-center mt-16 text-lg font-semibold">
          <Link
            to="/"
            className="relative group transition-all"
            onClick={() => setIsOpen(false)}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
          </Link>

          {["EV Models", "Showroom Location", "Pricing", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative group transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

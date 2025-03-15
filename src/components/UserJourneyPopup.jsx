import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const UserJourneyPopup = ({ isOpen, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-green-500 via-green-700 to-green-900 flex justify-center items-center z-50 overflow-hidden px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background Pulse Effect */}
          <div className="absolute w-full h-full bg-green-500 opacity-30 animate-pulse"></div>

          <motion.div
            className="w-full max-w-5xl h-[90vh] flex flex-col justify-center items-center p-4 md:p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* 🔹 Close Button (Fixed at the Top-Right Corner) */}
            <button
              className="absolute top-2 right-1 md:top-4 md:right-4 z-50 text-white hover:text-red-500 transition duration-300 transform hover:scale-110"
              onClick={onClose}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Popup Content */}
            <div className="bg-white bg-opacity-30 backdrop-blur-xl p-5 md:p-8 rounded-3xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col relative border border-white/20">
              {/* Title and Scroll Progress */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-6 space-y-4 md:space-y-0">
                <h2 className="text-2xl md:text-4xl font-extrabold text-dark text-center drop-shadow-lg">
                  How <span className="text-yellow-400">ElectriVys</span> Helps You – Step by Step
                </h2>
                <div className="w-full md:w-[40%] h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-yellow-400 transition-all rounded-full"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Steps Section */}
              <div
                className="max-h-[70vh] overflow-y-auto w-full px-3 md:px-6 space-y-3 md:space-y-5 custom-scrollbar"
                onScroll={handleScroll}
              >
                {[
                  { title: "1. Awareness (Acquisition)", desc: "Users discover ElectriVys through online ads, social media, and EV community discussions." },
                  { title: "2. Research & Exploration", desc: "Users compare different EV models, read expert reviews, and explore cost-of-ownership insights." },
                  { title: "3. Decision Making (Activation)", desc: "With AI-driven recommendations, users find the best EV based on range, budget, and brand preferences." },
                  { title: "4. Purchase & Financing", desc: "Users get financing options, EMI calculations, and dealer connections for a seamless purchase." },
                  { title: "5. Maintenance & Support", desc: "Access to maintenance tips, service centers, and 24/7 customer support for your EV." },
                  { title: "6. Charging Solutions", desc: "Find and book charging stations, get real-time availability, and payment options." },
                  { title: "7. Community & Updates", desc: "Join the EV community, get the latest updates, and participate in events and forums." },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-yellow-400 pl-3 md:pl-5 py-2 md:py-4 bg-white bg-opacity-60 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-90 hover:shadow-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-base md:text-xl font-semibold text-gray-900">{step.title}</div>
                    <div className="text-sm md:text-lg text-gray-800">{step.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserJourneyPopup;

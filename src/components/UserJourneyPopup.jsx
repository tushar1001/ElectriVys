import { useEffect } from "react";
import { X } from "lucide-react";

const UserJourneyPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
        <button className="absolute top-3 right-3 text-gray-600" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          How <span className="text-green-500">ElectriVys</span> Helps You – Step by Step
        </h2>

        <div className="space-y-4 text-gray-700">
          {[
            { title: "1. Awareness (Acquisition)", desc: "Users discover ElectriVys through online ads, social media, and EV community discussions." },
            { title: "2. Research & Exploration", desc: "Users compare different EV models, read expert reviews, and explore cost-of-ownership insights." },
            { title: "3. Decision Making (Activation)", desc: "With AI-driven recommendations, users find the best EV based on range, budget, and brand preferences." },
            { title: "4. Purchase & Financing", desc: "Users get financing options, EMI calculations, and dealer connections for a seamless purchase." },
            { title: "5. Maintenance & Support", desc: "Access to maintenance tips, service centers, and 24/7 customer support for your EV." },
            { title: "6. Charging Solutions", desc: "Find and book charging stations, get real-time availability, and payment options." },
            { title: "7. Community & Updates", desc: "Join the EV community, get the latest updates, and participate in events and forums." },
          ].map((step, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-3">
              <div className="font-semibold">{step.title}</div>
              <div className="text-sm">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserJourneyPopup;

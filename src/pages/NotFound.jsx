import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      {/* Animated 404 text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl font-extrabold text-orange-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Custom message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-700 mt-4 text-lg"
      >
        🚧 Work in progress! This page is not ready yet.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-500 mt-2 text-md"
      >
        Something exciting is coming soon! In the meantime, explore the home
        page. 🔥
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300"
        >
          <ArrowLeftCircle size={24} />
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

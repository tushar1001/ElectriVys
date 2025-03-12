import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsSection = () => {
  const newsArticles = [
    {
      title: "⚡ India’s EV Sales Surge by 300% in 2025",
      description: "The Indian EV market continues to expand, with electric two-wheelers leading the growth.",
    },
    {
      title: "🔋 Battery Swapping Technology Gains Popularity",
      description: "New battery-swapping stations are emerging across major cities, making EV charging faster.",
    },
    {
      title: "🌍 Government Pushes EV Subsidies",
      description: "The government announces new incentives to boost EV adoption and reduce pollution.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          📰 Latest EV News
        </h2>
        <p className="text-gray-600 text-lg mt-3">Stay updated with the latest trends in the EV industry.</p>
      </motion.div>

      {/* News Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {newsArticles.map((news, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 overflow-hidden hover:shadow-2xl"
          >
            {/* Light Green Gradient Border Effect on Hover */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-300 to-green-100 opacity-0 transition-all duration-300 hover:opacity-20 rounded-xl"></div>

            {/* Green Ribbon on Top */}
            <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-br-lg shadow-md">
              EV News
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 relative">{news.title}</h3>
            <p className="text-gray-600 mt-3 relative">{news.description}</p>

            {/* Read More Button with Cool Hover Animation */}
            <Link
              to="/"
              className="mt-4 inline-flex items-center text-green-700 font-semibold relative group"
            >
              Read More →
              <span className="ml-1 transition-transform transform group-hover:translate-x-1">
                ➜
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NewsSection;

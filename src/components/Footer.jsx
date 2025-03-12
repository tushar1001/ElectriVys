const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-4">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} ElectriVys. All Rights Reserved.
      </p>

      {/* Follow Us Section - Always Visible */}
      <div className="mt-3 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
        <p className="text-sm sm:text-base">Follow us on:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#" className="text-orange-500 font-semibold hover:underline">Instagram</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="text-orange-500 font-semibold hover:underline">Twitter</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="text-orange-500 font-semibold hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

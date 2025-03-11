const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} ElectriVys. All Rights Reserved.</p>
        <p className="mt-2">Follow us on <span className="text-orange-500">Instagram, Twitter, LinkedIn</span></p>
      </footer>
    );
  };
  
  export default Footer;
  
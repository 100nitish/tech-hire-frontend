import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">MyBrand</h1>
            <p className="text-gray-400">Building the future, one line of code at a time.</p>
          </div>

          
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="mb-2">Follow Us:</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MyBrand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

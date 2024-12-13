import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="w-full bg-slate-800 h-16 flex justify-between items-center px-4">
       
        <button
          className="text-yellow-100 text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

       
        <div className="text-red-600 text-xl font-bold">Logo</div>

        
        <ul
          className={`flex flex-col md:flex-row md:items-center absolute md:static bg-slate-800 w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="text-yellow-100 m-4 md:mx-4">Home</li>
          <li className="text-yellow-100 m-4 md:mx-4">About</li>
          <li className="text-yellow-100 m-4 md:mx-4">Contact</li>
          <li className="text-yellow-100 m-4 md:mx-4">Become a Teacher</li>
          <li className="text-yellow-100 m-4 md:mx-4">Become a Student</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

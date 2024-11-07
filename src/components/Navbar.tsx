"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-950 p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-12 mr-4" />
       
      </div>
      <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden md:max-h-full md:flex flex-col md:flex-row absolute md:relative top-full right-0 bg-gray-950 w-full md:w-auto transition-all duration-300 ease-in-out`}
      >
        <li className="md:inline-block">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block md:inline-block text-white hover:bg-gray-600 hover:text-yellow-500 py-2 px-4 md:rounded">
            Home
          </Link>
        </li>
        <li className="md:inline-block">
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block md:inline-block text-white hover:bg-gray-600 hover:text-yellow-500 py-2 px-4 md:rounded">
            About
          </Link>
        </li>
        <li className="md:inline-block">
          <Link href="/menu" onClick={() => setIsMenuOpen(false)} className="block md:inline-block text-white hover:bg-gray-600 hover:text-yellow-500 py-2 px-4 md:rounded">
            Menu
          </Link>
        </li>
        <li className="md:inline-block">
          <Link href="/book" onClick={() => setIsMenuOpen(false)} className="block md:inline-block text-white hover:bg-gray-600 hover:text-yellow-500 py-2 px-4 md:rounded">
            Book Your Seat
          </Link>
        </li>
        <li className="md:inline-block">
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block md:inline-block text-white hover:bg-gray-600 hover:text-yellow-500 py-2 px-4 md:rounded">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
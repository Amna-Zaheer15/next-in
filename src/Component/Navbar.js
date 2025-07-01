import React, { useState } from 'react';
import NextInlogo from '../images/NextInlogo.png';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaBook,
  FaServicestack,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-4 md:px-8  text-white w-full overflow-x-hidden">
      <div className="flex justify-between items-center flex-nowrap">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img src={NextInlogo} alt="Logo" className="h-24 w-24 object-contain" />
        </div>

        {/* Nav Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-sm lg:text-lg font-semibold whitespace-nowrap">
          <li className="flex items-center space-x-1 hover:text-blue-500">
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-500">
            <FaInfoCircle />
            <Link to="/about">About</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-500">
            <FaBook />
            <Link to="/course">Courses</Link>
          </li>
          <li className="flex items-center space-x-1 hover:text-blue-500">
            <FaServicestack />
            <Link to="/services">Services</Link>
          </li>
           <li className="flex items-center space-x-1 hover:text-blue-500">
            <FaEnvelope />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Contact + Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-5 text-sm whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className="mt-4 md:hidden flex flex-col items-center text-center space-y-6">
    <ul className="flex flex-col space-y-4 text-white text-base font-medium">
      <li className="hover:text-blue-500 flex items-center gap-2 justify-center">
        <FaHome />
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-blue-500 flex items-center gap-2 justify-center">
        <FaInfoCircle />
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-blue-500 flex items-center gap-2 justify-center">
        <FaBook />
        <Link to="/course">Courses</Link>
      </li>
      <li className="hover:text-blue-500 flex items-center gap-2 justify-center">
        <FaServicestack />
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:text-blue-500 flex items-center gap-2 justify-center">
        <FaEnvelope />
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    {/* Contact & Socials (Mobile only) */}
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center gap-2 text-sm text-white">
        <FaPhoneAlt />
        <span>+92 300 1234567</span>
      </div>
      <div className="flex justify-center gap-4 text-lg text-white">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
      </div>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;

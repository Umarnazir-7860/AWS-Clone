import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Desktop Navbar */}
      <div className="bg-primary hidden md:flex w-full items-center justify-between p-4">
        <img className="w-14" src="/images/aws_logo.png" alt="AWS Logo" />

        {/* Desktop Navigation */}
        <nav className="text-white flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">About AWS</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact US</a></li>
            <li><a href="#" className="hover:text-gray-300">Support</a></li>
            <li><a href="#" className="hover:text-gray-300">English</a></li>
            <li><a href="#" className="hover:text-gray-300">My Account</a></li>
            <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
          </ul>
          <button className="text-black bg-white rounded-lg p-2 font-semibold">
            Create an AWS Account
          </button>
        </nav>

        {/* Account Icon */}
        <VscAccount className="text-3xl text-white ml-4 sm:mr-48" />
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="bg-primary md:hidden fixed top-0 left-0 w-full p-4 z-50 flex items-center justify-between">
        <img className="w-14" src="/images/aws_logo.png" alt="AWS Logo" />
        
        {/* Mobile Menu Button */}
        <div className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IoClose className="text-3xl text-white" />
          ) : (
            <div className="space-y-1">
              <div className="h-0.5 w-6 bg-white"></div>
              <div className="h-0.5 w-6 bg-white"></div>
              <div className="h-0.5 w-6 bg-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary shadow-md p-4 flex flex-col items-center md:hidden">
          <ul className="text-white flex flex-col items-center space-y-3">
            <li><a href="#" className="hover:text-gray-300">About AWS</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact US</a></li>
            <li><a href="#" className="hover:text-gray-300">Support</a></li>
            <li><a href="#" className="hover:text-gray-300">English</a></li>
            <li><a href="#" className="hover:text-gray-300">My Account</a></li>
            <li><a href="#" className="hover:text-gray-300">Sign In</a></li>
          </ul>
        </div>
      )}

      {/* ✅ Second Navbar (For Desktop) */}
      <div className="bg-primary hidden md:flex items-center p-4 space-x-10">
        <button className="px-4 py-2 ml-10 text-white font-bold rounded-lg bg-gradient-to-r from-purple-700 to-blue-700 hover:from-blue-500 hover:to-purple-500">
          Amazon Q
        </button>
        <nav className="text-white space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Product</a></li>
            <li><a href="#" className="hover:text-gray-300">Solution</a></li>
            <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-300">Learn</a></li>
            <li><a href="#" className="hover:text-gray-300">Partner Network</a></li>
            <li><a href="#" className="hover:text-gray-300">AWS Marketplace</a></li>
            <li><a href="#" className="hover:text-gray-300">Customer Enablement</a></li>
            <li><a href="#" className="hover:text-gray-300">Events</a></li>
            <li><a href="#" className="hover:text-gray-300 flex">
              Explore More <FiSearch className="mt-1 ml-2 text-lg" />
            </a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

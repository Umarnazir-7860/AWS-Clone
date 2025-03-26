import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar1 = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // Search bar toggle
  return (
    <>
      {/* ✅ Desktop Navbar */}
      <div className="bg-primary  md:flex hidden w-full items-center justify-between p-4">
        <img
          className="w-14 mr-32 md:mr-11"
          src="/images/aws_logo.png"
          alt="AWS Logo"
        />

        {/* Desktop Navigation */}
        <nav className="text-white md:flex  items-center space-x-6 ">
          <ul className="flex space-x-6  md:space-x-2 md:text-xs ">
            <li>
              <a href="#" className="hover:text-gray-300">
                About AWS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact US
              </a>
            </li>
            <li className="relative group"> 
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer space-x-1"
              
              >
                <span className="flex">
                  {" "}
                  Support{" "}
                  <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Support Center
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Expert Center
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Knowledge Center
                  </a>
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-black hover:text-white"
                    >
                      AWS Support Overview
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300 flex items-center">
                English
                <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    French
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Itallian
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Japanease
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Spanish
                  </a>
                 
                </div>
              </div>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 "
                
              >
                <span className="flex">
                  My Account
                  <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    AWS Management Console
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Billing & Cost Management
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Security Credentials
                  </a>
                 
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sign In
              </a>

            </li>
          </ul>
          <button className="text-black bg-white rounded-lg p-2 md:w-1/5 md:text-xs md:p-1 font-semibold">
            Create an AWS Account
          </button>
          <VscAccount className="text-3xl text-white  sm:mr-48" />
        </nav>

        {/* Account Icon */}
      </div>
      <div className="bg-primary hidden md:flex justify-between  items-center p-4 sm:space-x-2 space-x-6">
        <button className="px-4 lg:px-4  md:ml-5 py-2 sm:ml-0 sm:px-0.5 sm:text-xs text-white font-bold rounded-lg bg-gradient-to-r from-purple-700 to-blue-700 hover:from-blue-500 hover:to-purple-500">
          Amazon Q
        </button>
        <nav className="text-white space-x-6 ">
          <ul className="flex space-x-6 sm:text-xs sm:space-x-2 md:text-md  ">
            <li>
              <a href="#" className="hover:text-gray-300">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Solution
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Partner Network
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                AWS Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Customer Enablement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 flex">
                Explore More{" "}
                <FiSearch
                  className=" ml-2 text-lg"
                  onClick={() => setShowSearch(!showSearch)}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="text-black md:flex hidden border border-primary p-4 items-center space-x-6 ">
          <ul className="flex  items-center font-semibold ml-24 md:ml-6  ">
        
            <li>
              <a href="#" className="hover:text-gray-300 md:text-[12px]  md:mr-1   text-lg">
                AWS Free Tier
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 md:text-[11px]  text-[13px] lg:ml-64 md:ml-8">
                Contact US
              </a>
            </li>
            <li className="relative group"> 
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer space-x-1"
              
              >
                <span className="flex mx-4 md:text-[11px] md:mt-1   text-[14px]">
                  {" "}
                  Overview{" "}
                  <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Support Center
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Expert Center
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Knowledge Center
                  </a>
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-black hover:text-white"
                    >
                      AWS Support Overview
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300 md:mx-2  mx-4 md:text-[11px] md:mt-1   text-[13px] flex items-center">
                Free Tier Categories
                <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    French
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Itallian
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Japanease
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Spanish
                  </a>
                 
                </div>
              </div>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="hover:text-gray-300 "
                
              >
                <span className="flex  mx-3  md:text-[11px] md:mt-1 text-[13px]">
                  How to Create an Account
                  <IoIosArrowDown className="mt-1 ml-1 transition-transform group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black/5 hidden group-hover:block">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    AWS Management Console
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Billing & Cost Management
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Security Credentials
                  </a>
                 
                </div>
              </div>
            </li>
        
            <li>
              <a href="#" className="hover:text-gray-300 mx-2 md:mx-1 md:text-[11px] md:mt-1  text-[13px]">
                FAQs
              </a>

            </li>
            <li>
              <a href="#" className="hover:text-gray-300 mx-2 md:text-[11px]      text-[13px]">
                Terms & Conditions
              </a>

            </li>
          </ul>
         </nav>

    

      {/* /* ✅ Mobile Navbar */}
      <div className="bg-primary  flex md:hidden w-full items-center justify-between p-4">
        <img
          className="w-14 mr-32 md:mr-11"
          src="/images/aws_logo.png"
          alt="AWS Logo"
        />
        <div className="flex items-center space-x-4">
          <FiSearch
            className="text-2xl text-white"
            onClick={() => setShowSearch(!showSearch)}
          />
          <div
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoClose className="text-3xl text-white" />
            ) : (
              <div className="space-y-1 ">
                <div className="h-0.5 w-6 bg-white"></div>
                <div className="h-0.5 w-6 bg-white"></div>
                <div className="h-0.5 w-6 bg-white"></div>
              </div>
            )}
          </div>
          <VscAccount className="text-3xl text-white ml-4 sm:mr-48" />
        </div>

        {isMenuOpen && (
          <div className="absolute top-40  left-0 w-full bg-primary shadow-md p-4 flex flex-col items-center md:hidden">
            <ul className="text-white flex flex-col items-center space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About AWS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="bg-primary  flex md:hidden w-full items-center justify-between p-10 space-x-5 ">
        <button className="text-black text-xs bg-white rounded-lg p-3 w-80 font-semibold">
          Get Started For Free
        </button>
        <button className="text-white bg-transparent border border-white  rounded-lg p-2 w-80 font-semibold">
          Contact Us
        </button>
      </div>
      {/* Search Bar Toggle (Appears when showSearch is true) */}
      {showSearch && (
        <div className="absolute top-42 left-0 right-0 mx-auto w-80 bg-primary shadow-lg p-2  flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 outline-none border border-gray-300 rounded-md"
          />
          <FiSearch
            className="text-2xl text-gray-500 ml-2 mr-2 cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      )}
    </>
  );
};

export default Navbar1;

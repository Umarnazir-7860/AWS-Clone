import React from "react";
import { IoInformationCircle } from "react-icons/io5";

const Section = () => {
  return (
    <>
      <div className="bg-section flex flex-col items-center py-40">
        <h3 className="text-white  font-bold text-center text-1xl  sm:text-3xl md:text-4xl lg:text-5xl">
          AWS Free Tier
        </h3>
        <p className="text-white mt-5 text-[10px] sm:text-md md:text-md lg:text-xl">
          Gain free, hands-on experience with the AWS products and services
        </p>
        <span className="text-blue-500 cursor-pointer  text-[10px] mt-2 lg:mt-6 flex lg:text-lg hover:underline">
          Learn more about AWS Free Tier{" "}
          <IoInformationCircle className="lg:mt-1 mt-0.5 lg:text-lg mx-1" />{" "}
        </span>
        <button className="text-black bg-yellow-500 p-2 rounded-md mt-6 text-[10px] lg:text-lg lg:w-1/4">
          Create a free Account
        </button>
        <div className="relative mt-2  w-full bg-cover bg-center h-20 flex items-center justify-center">
          <div className="bg-gradient-to-r from-black bg-opacity-50 text-white px-4 py-2 rounded-md max-w-3xl flex items-center space-x-4">
            {/* Blue Vertical Line */}
            <div className="w-1 h-16 bg-blue-500"></div>

            {/* Text Content */}
            <p className="text-[10px] sm:text-sm md:text-sm lg:text-sm sm:text-md font-semibold text-center">
              <span className="font-bold ">
                Innovate faster with generative AI on AWS.
              </span>
              From startups to enterprises, organizations trust AWS to innovate
              with generative artificial intelligence.
              <a href="#" className="text-blue-400 hover:underline">
                {" "}
                Learn more about Generative AI on AWS »
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border h-auto w-50 sm:20 m-28 shadow-lg rounded-md border-gray-400 mt-10">
      <h2 className="font-semibold text-center text-2xl p-3  text-gray-700">Three Types of Offers</h2>
    <p className="text-sm sm:px-3 px-6 mb-4 mt-2 text-center "  >More than 100 AWS products are available on AWS Free Tier today. Three different types of free offers are available
    depending on the product used. Click an icon below to explore our offers.</p>   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-6">
  <div className="flex flex-col items-center text-center">
    <a href="" className="mb-3 font-bold text-blue-500 hover:text-blue-800 hover:underline">Free Trials</a>
    <img src="/images/clock.png" alt="Clock Icon" className="w-80" />
    <a href="" className="text-sm mt-3 font-medium text-blue-500 hover:underline">Click to Learn More</a>
  </div>
  <div className="flex flex-col items-center text-center">
    <a href="" className="mb-3 font-bold text-blue-500 hover:text-blue-800 hover:underline">12 Months Free</a>
    <img src="/images/calender.png" alt="Calendar Icon" className="w-80" />
    <a href="" className="text-sm mt-3 font-medium text-blue-500 hover:underline">Click to Learn More</a>
  </div>
  <div className="flex flex-col items-center text-center">
    <a href="" className="mb-3 font-bold text-blue-500 hover:text-blue-800 hover:underline">Always Free</a>
    <img src="/images/free_2022.png" alt="Free Icon" className="w-80" />
    <a href="" className="text-sm mt-3 font-medium text-blue-500 hover:underline">Click to Learn More</a>
  </div>
</div>

     </div>
     <div className="xl:ml-16">
      <h2 className=" text-gray-700 font-semibold  text-2xl">Explore Top Product Categories</h2>
      <div className="grid lg:grid-cols-6 lg:gap-1 md:grid-cols-3  sm:grid-cols-3 grid-cols-1  gap-2 mt-10 lg:mx-20 sm:mx-24 mx-28 ">
  <div className="flex flex-col items-center border rounded-md  w-[140px] border-gray-400 px-4 py-2 "> 
    <img src="/images/Compute_32.png" className="w-11" alt="" />
    <p>Compute</p>
  </div>
  <div className="flex flex-col items-center border rounded-md w-[140px] border-gray-400 px-4 py-2"> 
    <img src="/images/Database_32.png" className="w-11" alt="" />
    <p>Database</p>
  </div>
  <div className="flex flex-col items-center border rounded-md w-[140px] border-gray-400 px-4 py-2"> 
    <img src="/images/Storage_32.png" className="w-11" alt="" />
    <p>Storage</p>
  </div>
  <div className="flex flex-col items-center border rounded-md w-[140px] border-gray-400 px-4 py-2"> 
    <img src="/images/container_32.png" className="w-11" alt="" />
    <p>Containers</p>
  </div>
  <div className="flex flex-col items-center border rounded-md w-[170px] sm:w-[142px] border-gray-400  py-2"> 
    <img src="/images/squid-ink-Mobile_32.png" className="w-11" alt="" />
    <p className="text-sm text-balance text-center mt-2 ">Web and Mobile Apps</p>
  </div>
  <div className="flex flex-col items-center border md:ml-0 sm:ml-0 rounded-md w-[140px] border-gray-400 ml-0 lg:ml-6 px-4 py-2"> 
    <img src="/images/Serverless_32.png" className="w-11" alt="" />
    <p>Serverless</p>
  </div>
  <div className="flex flex-col items-center border rounded-md mt-2  w-[145px] border-gray-400 px-4 py-2 ml-0"> 
    <img src="/images/Machine-Learning_Icon_32.png" className="w-12" alt="" />
    <p className="text-sm text-balance text-center mt-2">Machine Learning</p>
  </div>
</div>

      
     </div>
      
    </>
  );
};

export default Section;

import React from 'react'
import { IoInformationCircle } from 'react-icons/io5'

const Section = () => {
  return (
    <>
     <div className='bg-section flex flex-col items-center py-40'>
        <h3 className='text-white  font-bold text-center text-1xl  sm:text-3xl md:text-4xl lg:text-5xl'>AWS Free Tier</h3>
        <p className='text-white mt-5 text-[10px] sm:text-md md:text-md lg:text-xl'>Gain free, hands-on experience with the AWS products and services</p>
        <span className='text-blue-500 cursor-pointer  text-[10px] mt-2 lg:mt-6 flex lg:text-lg hover:underline'>Learn more about AWS Free Tier <IoInformationCircle  className='lg:mt-1 mt-0.5 lg:text-lg mx-1'/> </span>
        <button className='text-black bg-yellow-500 p-2 rounded-md mt-6 text-[10px] lg:text-lg lg:w-1/4'>Create a free Account</button>
        <div className="relative mt-2  w-full bg-cover bg-center h-20 flex items-center justify-center">
        <div className="bg-gradient-to-r from-black bg-opacity-50 text-white px-4 py-2 rounded-md max-w-3xl flex items-center space-x-4">
    {/* Blue Vertical Line */}
    <div className="w-1 h-16 bg-blue-500"></div>

    {/* Text Content */}
    <p className="text-[10px] sm:text-sm md:text-sm lg:text-sm sm:text-md font-semibold text-center">
      <span className="font-bold ">Innovate faster with generative AI on AWS.</span> 
      From startups to enterprises, organizations trust AWS to innovate with generative artificial intelligence. 
      <a href="#" className="text-blue-400 hover:underline"> Learn more about Generative AI on AWS »</a>
    </p>
</div>

</div>

        </div> 

    </>
  )
}

export default Section

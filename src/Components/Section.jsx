import React from 'react'
import { IoInformationCircle } from 'react-icons/io5'

const Section = () => {
  return (
    <>
     <div className='bg-section flex flex-col items-center  py-40'>
        <h3 className='text-white text-5xl font-bold text-center '>AWS Free Tier</h3>
        <p className='text-white mt-5 text-xl'>Gain free, hands-on experience with the AWS products and services</p>
        <span className='text-blue-500 cursor-pointer mt-6 flex hover:underline'>Learn more about AWS Free Tier <IoInformationCircle  className='mt-1 text-lg mx-1'/> </span>
        <button className='text-black bg-yellow-500 p-2 rounded-md mt-6 w-1/4'>Create a free Account</button>
        </div> 
    </>
  )
}

export default Section

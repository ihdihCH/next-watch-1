import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='h-[150px] bg-[#EC0935]'>
        <h3 className='text-2xl font-bold p-4 text-center text-white'>Swatch Store</h3>
        <div className='flex justify-center items-center'>
            <FaFacebook size={30} className="hover:hover:text-black/70 ease-in duration-300 mr-4 text-white cursor-pointer"/>
            <FaTwitter size={30} className="hover:hover:text-black/70 ease-in duration-300 mr-4 text-white cursor-pointer"/>
            <FaInstagram size={30} className="hover:hover:text-black/70 ease-in duration-300 mr-4 text-white cursor-pointer"/>
            <FaYoutube size={30} className="hover:hover:text-black/70 ease-in duration-300 mr-4 text-white cursor-pointer"/>
            <FaLinkedin size={30} className="hover:hover:text-black/70 ease-in duration-300 mr-4 text-white cursor-pointer"/>
        </div>
    </div>
  )
}

export default Footer
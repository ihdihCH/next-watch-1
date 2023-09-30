import Image from 'next/image'
import React from 'react'
import team1 from "../public/team1.webp"
import team2 from "../public/team2.webp"
import team3 from "../public/team3.webp"
const Testimonial = () => {
  return (
    <div className='relative p-[4rem] backTest'>
      {/*Overlay*/}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#EC0935]/50 z-[9]'/>
      <div className='z-[9] relative '>
      <h2 className='text-white font-bold text-2xl text-center'>Store Watches</h2>
      <p className='font-bold text-white p-4 text-2xl text-center'>la composition et la mise en page avant impression.</p>
      </div>
        <div className='grid lg:grid-cols-3 gap-3 container '>
        <div className=' z-[9] text-center pt-6'>
            <Image src={team1} alt="team1" className='w-[35%] h-[60%] rounded-full object-cover m-auto'/>
            <span className='text-white p-4 block'>Jean Doe</span>
            <p className='text-white'>is an honest endorsement of your product or service that usually</p>
        </div>
        <div className='z-[9] text-center pt-6'>
            <Image src={team2} alt="team1" className='w-[35%] h-[60%] rounded-full object-cover m-auto'/>
            <span className='text-white p-4 block'>Jean Doe</span>
            <p className='text-white'>is an honest endorsement of your product or service that usually</p>
        </div>
        <div className='z-[9] text-center pt-6'>
            <Image src={team3} alt="team1" className='w-[35%] h-[60%] rounded-full object-cover m-auto'/>
            <span className='text-white p-4 block'>Jean Doe</span>
            <p className='text-white '>is an honest endorsement of your product or service that usually</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonial
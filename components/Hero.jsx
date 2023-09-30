import Image from 'next/image'
import React from 'react'
const Hero = (props) => {
  return (
    <div className='flex items-center justify-center h-screen flex-col md:flex-row p-8'>
        <div >
            <Image src={props.heroImg} alt="Img" className='mt-6'/>
        </div>
        <div  className=' pt-[9rem] text-center p text-[#EC0935] mt-[-10rem] z-[2] md:p-5 md:text-left'>
            <h2 className=' text-2xl md:text-5xl font-bold'>{props.heading}</h2>
            <p className='py-5 text-xl'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            <button className='px-8 py-2 border mb-6'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero
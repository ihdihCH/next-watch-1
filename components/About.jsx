import Image from 'next/image'
import React from 'react'
import About1 from "../public/About1.jpg"
const About = () => {
    return (
    <div id='about' className='p-10 mt-6 bg-white max-w-[1240px]'>
        <div className='grid md:grid-cols-2 container'>
                <Image src={About1} alt="/" width={800} height={800} objectFit="cover"/>
            <div className='flex flex-col justify-center text-center md:text-left'> 
            <h2 className='text-4xl p-4 font-bold'>About Us</h2>
            <p className='text-left'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
                assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
                <button className='px-8 py-2 mt-4 border  hover:bg-[#EC0935] ease-in duration-300 w-[150px] font-bold'>Click Her</button>
            </div>
        </div>
    </div>
    )
}

export default About
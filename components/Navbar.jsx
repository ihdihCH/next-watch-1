import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[color, setColor] = useState('transparent')
    const[textColor, setColorText] = useState('#000')


    const handleNav=()=>{
        setNav(!nav)
    }

    useEffect(() =>{
        const changeColor = () =>{
            if(window.scrollY >=90){
                setColor('#EC0935')
                setColorText('#000')
            }else{
                setColor('transparent')
                setColorText('#000')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-[10] ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 container'>
            <Link href="/">
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Wactce Store</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 text-xl'>
                    <Link href="/">Home</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href="/#about">About</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href="/#store">Store</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
            {/*Button Mobil*/}
            <div onClick={handleNav} className="block sm:hidden z-10">
                {nav ?  <AiOutlineClose size={20} style={{color: `${textColor}`}}/>: <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>
}
            </div>
            {/*Mobil Nav*/}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#EC0935] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#EC0935] text-center ease-in duration-300'}>
            <ul>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                    <Link href="/#about">About</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                    <Link href="/#store">Store</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
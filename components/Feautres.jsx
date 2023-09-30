import React from 'react'
import {AiOutlineCamera, AiFillAndroid, AiFillAudio, AiOutlineWifi, AiTwotonePhone, AiOutlineWhatsApp} from "react-icons/ai"
const Feautres = () => {
  return (
    <div className='max-w-[1240px m-auto pt-8 py-8 bg-gray-200'>
        <h2 className='text-center font-bold text-[#EC0935] text-2xl'>Feautres</h2>
        <p className='text-center font-bold text-2xl p-4'>Le Lorem Ipsum est simplement du faux </p>

        <div className='grid md:grid-cols-3 gap-3 container'>
            <div className='border bg-white'>
                <AiOutlineCamera size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold '>Camera</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
            <div className='border bg-white'>
                <AiFillAndroid size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold'>Android</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
            <div className='border bg-white'>
                <AiFillAudio size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold'>Audio</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
            <div className='border bg-white'>
                <AiOutlineWifi size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold'>Wifi</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
            <div className='border bg-white'>
                <AiTwotonePhone size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold'>Phone Call</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
             <div className='border bg-white'>
                <AiOutlineWhatsApp size={30} className="text-[#EC0935] m-auto mt-2"/>
                <h2 className='text-center font-bold'>Whatsapp</h2>
                <p className='text-center p-4'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
            </div>
        </div>
    </div>
  )
}

export default Feautres
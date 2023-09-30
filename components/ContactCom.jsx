import React from 'react'

const ContactCom = () => {
  return (
    <div className='max-auto container p-[4rem]'>
        <h2 className='text-2xl font-bold text-center p-4'>Contact Me</h2>
        <form className='max-w-[800px] m-auto'>
            <div className='grid md:grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 outline-none rounded-lg' type="text" placeholder='text'/>
                <input className='border shadow-lg p-3 outline-none rounded-lg' type="Email" placeholder='email'/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2 outline-none rounded-lg' type="text" placeholder='subject'/>
            <textarea className='border shadow-lg p-3 w-full outline-none rounded-lg' cols="30" rows="1O" type="text" placeholder='Message'></textarea>
            <button className='text-white bg-[#EC0935] rounded-lg p-3 mt-2 w-full hover:bg-[#EC0935]/90 duration-400 ease-in-out'>Submit</button>
        </form>
    </div>
  )
}

export default ContactCom
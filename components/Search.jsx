import React from 'react'

const Search = () => {
  return (
    <div className='relative p-[2.5rem] searchImg mt:6'>
        {/*Overlay*/}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#EC0935]/50 z-[9]'/>
      <div className='z-[9] relative '>
      <h2 className='text-white font-bold text-2xl text-center'>Store Watches</h2>
      <p className='font-bold text-white p-4 text-2xl text-center'>la composition et la mise en page avant impression.</p>
      </div>
      <div className='z-[9] relative text-center'>
        <input type="text" placeholder="Search now" className='w-[50%] h-[100%] p-3 text-center rounded-lg outline-none'/>
        <button className='text-white bg-[#EC0935] rounded-lg p-3 ml-3'>Search Now</button>
      </div>
    </div>
  )
}

export default Search
import Image from 'next/image'
import React from 'react'
import paul1 from "../public/paul1.jpg"
import store1 from "../public/store1.jpg"
import paul3 from "../public/paul3.jpg"
import About2 from "../public/About2.jpg"
const Store = () => {
  return (
    <div id='store' className='bg-white pt-[5rem] pb-[6rem]'>
        <div className='text-center'>
            <h2 className='text-[#EC0935] font-bold text-2xl'>Store Watches</h2>
            <p className='font-bold p-4 text-2xl'>la composition et la mise en page avant impression.</p>
        </div>
        <div className='grid lg:grid-cols-4 container gap-4'>
            <div>
                <Image src={paul1} alt='StoreImg' objectFit='cover' style={{ height:"80%", backgroundSize:"cover"}}/>
                <h2 className='text-center p-3 font-bold'>Price: <span className='text-[#EC0935]'>99.99$</span></h2>
                <p className='text-center font-bold'>Contrairement à une opinion répandue</p>
            </div>
            <div>
                <Image src={store1} alt='StoreImg' objectFit='cover' style={{ height:"80%", backgroundSize:"cover" }}/>
                <h2 className='text-center p-3 font-bold'>Price: <span className='text-[#EC0935]'>99.99$</span></h2>
                <p className='text-center font-bold'>Contrairement à une opinion répandue</p>
            </div>
            <div>
                <Image src={paul3} alt='StoreImg' objectFit='cover' style={{ height:"80%", backgroundSize:"cover"  }}/>
                <h2 className='text-center p-3 font-bold'>Price: <span className='text-[#EC0935]'>99.99$</span></h2>
                <p className='text-center font-bold'>Contrairement à une opinion répandue</p>
            </div>
            <div>
                <Image src={About2} alt='AboutImg' objectFit='cover' style={{ height:"80%", backgroundSize:"cover" }}/>
                <h2 className='text-center p-3 font-bold'>Price: <span className='text-[#EC0935]'>99.99$</span></h2>
                <p className='text-center font-bold'>Contrairement à une opinion répandue</p>
            </div>
        </div>
    </div>
  )
}

export default Store
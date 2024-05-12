import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/button'

const SuperQuality = () => {
  return (
    <section id='about-us' className='mt-32  max-lg:flex-col flex gap-10 justify-between'>
      <div className='flex flex-col lg:max-w-lg'>
      <h1 className='text-4xl font-bold font-palanquin'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
            <p className='font-montserrat mt-6 text-sm   text-slate-gray leading-8 '>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className='mt-6 font-montserrat text-sm text-slate-gray leading-8'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
        <Button Label={"View Details"} />
        </div>
      </div>
      <div className='flex flex-1 justify-center item-center'>
        <img src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
 />

      </div>
    </section>
  )
}

export default SuperQuality

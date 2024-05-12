import React from 'react'
import Button from '../components/button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='flex max-lg:flex-col justify-between items-center mt-20 gap-10'>
       <div className='flex lg:max-w-md'>
       <h1 className='text-4xl font-semibold font-palanquin'> Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
       </div>
       <div className='flex border-2 border-gray rounded-full lg:max-w-[40%] w-full p-2 items-center justify-center'>
       <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button Label='Sign Up' fullWidth />
        </div>
       </div>
    </section>
  )
}

export default Subscribe

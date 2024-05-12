import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex max-lg:flex-col-reverse items-center justify-between mt-20 gap-10'>
        <div className='flex justify-center flex-1 items-center'>
            <img src={offer} 
             width={773}
                height={687}
                className='object-contain '/>
        </div>
       <div className='flex flex-col flex-1'>
            <h1 className='text-4xl font-bold font-palanquin'> <span className='text-coral-red'>Special</span> Offer</h1>
            <p className='mt-4 font-montserrat text-md text-slate-gray leading-normal'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
            </p>
            <p className='mt-6 font-montserrat text-md text-slate-gray leading-normal'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
        </p>
        <div className='flex mt-10 gap-5'>
            <Button icon={arrowRight} Label={"Shop Now"} />
            <Button Label={"Learn more"}  bgColor={"bg-white"} textColor={"text-slate-gray"} borderColor={"border-gray"}/>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffers

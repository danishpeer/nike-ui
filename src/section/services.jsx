import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='flex max-sm:flex-col mt-20 gap-9 justify-center flex-wrap'>

        {services.map((service) => (
            <div id={service.label} key={service.label} className='px-10 py-16 flex flex-1 flex-col sm:min-w-[350px] sm:w-[350px] rounded-[20px] shadow-3xl'>
                <div className='bg-coral-red rounded-full w-11 h-11 flex items-center justify-center'><
                    img src={service.imgURL} width={20} height={20}  />
                </div>
                <h3 className='mt-5 font-palanquin text-2xl font-semibold leading-normal'>{service.label}</h3>
                <p className='font-montserrat break-words mt-3 text-md text-slate-gray leading-normal '>{service.subtext}</p>

            </div>
        ))}
        
      
    </section>
  )
}

export default Services

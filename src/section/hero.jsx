import React, { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import Shoecard from '../components/shoecard'
import Button from '../components/button'
const Hero = () => {
    const [selectedImage, setSelectedImage] = useState(bigShoe1)
  return (
    <section id='home' className='w-full min-h-screen flex lg:flex-row flex-col gap-10 justify-center xl:padding-l wide:padding-r padding-b px-10' >
      <div className='relative lg:w-2/5 flex flex-col justify-center items-start w-full  pt-28'>
        <p className='text-xl text-coral-red font-montserrat'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-7xl max-sm:text-[50px] max-sm:leading-[82px] font-bold'>
            <span className='z-10 lg:bg-white lg:whitespace-nowrap relative pr-10'>The New Arrival </span> <br/>
            <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
             
        </h1>
        <p className='font-montserrat mt-6 text-lg text-slate-gray leading-8 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life. </p>

    <Button Label={"Shop now"} icon={arrowRight} />
        {/* to show statistics */}
        <div className='flex mt-10 gap-16 items-start flex-wrap'>
            {statistics.map((stat, index)=> (
                 <div key={stat.label} className='flex flex-col items-center justify-center gap-2'>
                    <p className='xl:text-2xl sm:text-xl font-palanquin font-bold'>{stat.value}</p>
                    <p className='font-montserrat leading-7 text-slate-gray text-sm'>{stat.label}</p>
                 </div>
            ))}
        </div>
       
      </div>
      <div className='flex relative flex-1 items-center p-10 justify-center bg-cover bg-center bg-hero min-h-screen'>
            <img src={selectedImage} width={400} height={400} />
            
            <div className='flex-1 absolute rounded-xl -bottom-[5%] gap-5 p-5 flex flex-wrap'>
                {shoes.map((shoe, index) => (
                    <Shoecard key={`keyshoes-${index}`} img={shoe} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                ))}
                

            </div>
        </div>
    </section>
  )
}

export default Hero

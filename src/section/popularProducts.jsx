import React from 'react'
import PopularCard from '../components/PopularCard'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <section id="products" className='xl:padding-l wide:padding-r padding-b px-10 flex flex-col'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold font-palanquin'>Our <span className='text-coral-red'>Popular</span> Products</h1>
            <p className='font-montserrat mt-6 text-md text-slate-gray leading-8 mb-14 '>Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
            {products.map((product, index) => (
                <PopularCard key={index} product={product} />
            ))}
           
        </div>
    </section>
  )
}

export default PopularProducts

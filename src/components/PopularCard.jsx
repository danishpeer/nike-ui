import React from 'react'
import { star } from '../assets/icons'

const PopularCard = ({key, product}) => {
  return (

        <div  className='flex flex-col rounded-xl cursor-pointer flex-1 justify-center items-center' key={key}>
            <img src={product.imgURL} className='w-[280px] h-[280px]'/>
            <div className='flex mt-6 justify-start gap-2.5'>
                <img src={star} />
                <p className='text-slate-gray font-montserrat text-xl leading-normal'> (4.5)</p>
            </div>
            <h3 className='mt-2 font-palanquin font-semibold text-2xl leading-normal'>{product.name}</h3>
            <p className='mt-2 font-semibold font-montserrat leading-normal text-2xl text-coral-red' >{product.price}</p>
        </div>
  )
}

export default PopularCard

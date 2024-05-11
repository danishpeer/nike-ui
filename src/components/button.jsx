import React from 'react'
import { arrowRight } from '../assets/icons'

const Button = ({Label, icon}) => {
  return (
    <div>
    <button className='flex bg-coral-red text-white text-md px-7 py-4 font-montserrat gap-2 rounded-full'>{Label} {icon?<img src={arrowRight} />: null}</button>

    </div>
  )
}

export default Button

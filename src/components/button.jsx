import React from 'react'
import { arrowRight } from '../assets/icons'

const Button = ({Label, icon, bgColor, textColor, borderColor, fullWidth}) => {
  return (
    <div>
    <button className={`flex ${bgColor ? bgColor :  "bg-coral-red "} ${textColor ? textColor : " text-white"} ${fullWidth ? "w-full" : ""} ${borderColor ? borderColor : " border-coral-red"}  border-2 border-green  max-sm:text-sm text-md px-7 py-3 font-montserrat gap-2 rounded-full`}>
        {Label} {icon?<img src={arrowRight} />: null}
    </button>

    </div>
  )
}

export default Button

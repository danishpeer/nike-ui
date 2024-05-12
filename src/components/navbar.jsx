import React from 'react'
import {headerLogo} from '../assets/images/index'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
const Navbar = () => {
  return (
    <nav className='flex justify-between py-5 items-center absolute w-full z-10'>
        <a href='/' ><img src={headerLogo} width={129}
            height={29} /> </a>
        {/* Desktop nav */}
        <div className='hidden md:flex flex-1 items-center justify-center'> 
            <ul className='flex gap-16'>
                {navLinks.map((navLink, index) => (
                    <li key={index}> <a href={navLink.href} className='font-montserrat text-md text-slate-gray leading-normal'> {navLink.label} </a></li>
                ))}

            </ul>
        </div>
        

        {/* mobile nav */}
        <div className='flex md:hidden items-center gap-2'>
            <a href='/'  ><img src={hamburger} width={30} height={30} /> </a>
        </div>
      
    </nav>
  )
}

export default Navbar

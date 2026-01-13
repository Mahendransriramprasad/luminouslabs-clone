import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
const Cart = () => {
  return (
    <div className='flex justify-between gap-8 p-2'>
        <div className='flex items-center gap-2'>
          <FaChevronDown className='text-amber-100 text-xl'/>
          <h1 className='text-amber-100 text-xl'>EN</h1>
        </div>
        <div className='flex items-center gap-2 '>
          <h1 className='text-amber-100 text-xl'>Cart</h1>
          <div className='rounded-full border border-amber-100 p-2 '>
          <FaBagShopping className='text-amber-100 text-xl'/>
          </div>
          
        </div>
        
    </div>
  )
}

export default Cart
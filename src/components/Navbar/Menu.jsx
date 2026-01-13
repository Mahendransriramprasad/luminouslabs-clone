import React from 'react'

const Menu = () => {
  return (
    <div className='flex gap-8 justify-between'>
        <button className='p-2 text-amber-100 text-xl hover:border hover:border-amber-400 hover:rounded-4xl font-medium'>Technology</button>
        <button className='p-2 text-amber-100 text-xl hover:border hover:border-pink-400 hover:rounded-4xl font-medium'>Company</button>
        <button className='p-2 text-amber-100 text-xl hover:border hover:border-red-400 hover:rounded-4xl font-medium'>Commercial</button>
        <button className='p-2 text-amber-100 text-xl hover:border hover:border-amber-200 hover:rounded-4xl font-medium'>Blog</button>
        <button className='border border-amber-100 px-4 py-2 text-center rounded-4xl text-amber-100 text-xl font-medium'>Shop</button> 
    </div>
  )
}

export default Menu
import React from 'react'
import Logo from './logo'
import Menu from './menu'
import Cart from './cart'
const Nav = () => {
  return (
    <div className=" flex justify-between px-20 py-8 ">
            <Logo/>
            <Menu/>
            <Cart/>
    </div>
  )
}

export default Nav
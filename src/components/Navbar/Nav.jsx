import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Cart from './Cart'
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
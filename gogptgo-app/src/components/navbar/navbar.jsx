import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons';



const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3_navbar-links_logo'></div>
          <img src={logo} alt='logo' />
      </div>
      Navbar
    </div>
  )
}

export default Navbar
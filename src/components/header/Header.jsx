import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/Aditya.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi My Name is</h5>
        <h1>Aditya Kartikeyan</h1>
        <h5 className='text-light'>Junior Full Stack Developer</h5>
        <Cta/>
        <HeaderSocials/>
         <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
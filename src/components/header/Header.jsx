import React from 'react';
import './header.css';
import Cta from './Cta';
import ME from '../../assets/Aditya.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I am</h5>
        <h1>Aditya Kartikeyan</h1>
        <h5 className='text-light'>Full Stack Developer & Business Analytics Enthusiast</h5>
        <p className='header_description'>
          I specialize in building scalable full-stack applications using React.js, Next.js, and Node.js, 
          blending technical expertise with strategic business insights. Currently pursuing a Master's in 
          Business Analytics at the University of Sydney, I am passionate about leveraging data-driven 
          solutions to drive innovation.
        </p>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Aditya Kartikeyan" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;

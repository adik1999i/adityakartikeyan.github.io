import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineLaptop, AiOutlineContacts } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <button
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        aria-label="Home"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <AiOutlineHome />
      </button>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        aria-label="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        aria-label="Experience"
      >
        <BiBook />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav('#project')}
        className={activeNav === '#project' ? 'active' : ''}
        aria-label="Projects"
      >
        <AiOutlineLaptop />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        aria-label="Contact"
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;

import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>Aditya Kartikeyan</h2>
        </div>

        <ul className="footer__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:adityak1999i@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        </div>

        <small>&copy; 2024 Aditya Kartikeyan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

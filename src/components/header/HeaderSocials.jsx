import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;

import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Aditya Kartikeyan" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years working in the industry</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Companies</h5>
              <small>3 (Limendo, Capgemini, RedHat Partner)</small>
            </article>
          </div>
          
          <p>
            I am Aditya Kartikeyan, a Full Stack Developer with experience in React.js, Next.js, and Node.js. 
            Currently pursuing a Master’s in Business Analytics at the University of Sydney, I blend technical 
            expertise with strategic business insights to drive innovation. I have engineered solutions like CMS 
            platforms and analytical dashboards, enhancing efficiency and data-driven decision-making.
            My previous roles at Limendo and Capgemini have honed my skills in full-stack development, bug analysis, 
            and team collaboration. I am passionate about cloud computing, cloud deployment, and creating impactful 
            solutions. My eagerness to learn and adapt quickly has been key to my success, and I am excited about 
            leveraging my skills in new challenges.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;

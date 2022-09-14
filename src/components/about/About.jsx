import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="" />
       </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>1+ years working  </small>
      </article>
        
      

      <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5>Projects</h5>
        <small>3</small>
      </article>

      <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Companies</h5>
        <small>2</small>
      </article>

     </div>
     <p>
        Hi my name is aditya kartikeyan , iam currently working in the it industry as a junior full stack developer.
        - Worked as a front-end developer for Capgemini for 1 year on a wrapper of React.js 
        - Having the skills of analysing , bug fixing and customisation 
        - Having Full stack experience creating projects using Spring , Spring boot and React.js 
        - Ability to quickly adapt to the environment according to the needs , eager to learn attitude with a hunger for getting knowledge 
        - Currently interested in Cloud computing , Cloud deployment and developing.

      </p>
      </div>
    </div>
    </section>

  )
}

export default About
import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id='project'>
      <h5>My Work Till Now</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <article className='project__item'>
           <div className="project__item-image">
              
           </div>
           <h3>Apartment Security Management</h3>
           <div className="project__item-cta">
           <a href="https://github.com/" className='btn' target='_blank'>Github</a>
           </div>
         
        </article>
        <article className='project__item'>
           <div className="project__item-image">
              
           </div>
           <h3>Personal Portfolio React Project</h3>
           <div className="project__item-cta">
           <a href="https://github.com/" className='btn' target='_blank'>Github</a>
           </div>
           
        </article>
      </div>
    </section>
  )
}

export default Project
import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Current SkillSet</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
         <h2>Junior Software Engineer</h2>
         <h5>Limendo India</h5>
         <h6>01/06/2022 - Current</h6>
         <div className="experience__content">
          <small>Working as a full stack developer here in limendo. Worked on projects having html,css,js as its core base and going to work on projects using react</small>
          <br></br>
        
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>HTML</h6>
          <small className='text-light'>intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>CSS</h6>
          <small className='text-light'>intermediate</small>
          </div> 
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>JS</h6>
          <small className='text-light'>intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>React</h6>
          <small className='text-light'>Beginner</small>
          </div>        
          </article>

         </div>
        </div>
        <div className="experience__backend">
        <h2>Software Engineer/Analyst</h2>
         <h5>Capgemini</h5>
         <h6>25/05/2021 - 30/05/2022</h6>
         <div className="experience__content">
          <small>Worked as a front end developer on a wrapper of react js called remix</small>
          <br></br>
           <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>HTML</h6>
          <small className='text-light'>intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>CSS</h6>
          <small className='text-light'>intermediate</small>
          </div> 
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>JS</h6>
          <small className='text-light'>intermediate</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h6>React</h6>
          <small className='text-light'>Beginner</small>
          </div>        
          </article>

         </div>


        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react'
import './experience.css'
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
         <br></br>
         <div className="experience__content">
          <p>
            Working as a full stack developer in limendo , working on projects having 
            html,css,js as its core base. Currently working on projects with MERN as the 
            tech stack.

          </p>
         

         </div>
        </div>
        <div className="experience__backend">
        <h2>Software Engineer/Analyst</h2>
         <h5>Capgemini</h5>
         <h6>25/05/2021 - 30/05/2022</h6>
         <br></br>
         <div className="experience__content">
          <p>
          Worked as a front-end developer on a wrapper of react Js for a top insurance project.
          Was able to do analysing , customisation and bug fixes in the wrapper of React.js. Also
          have basic knowledge on deployment.
          </p>
         </div>


        </div>
      </div>
    </section>
  )
}

export default Experience
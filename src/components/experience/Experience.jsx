import React from 'react';
import './experience.css';
import limendo from "../../assets/limendo.jpeg"
import Capgemini from "../../assets/capgemini.png"
import Redhat from "../../assets/redhat.svg"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Current SkillSet</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Limendo Experience */}
        <div className="experience__frontend">
          <div className="experience__header">
          <img
              src={limendo} /* Replace with actual path to Limendo logo */
              alt="Limendo Logo"
              className="experience__image"
            />
            <div className="experience__text">
              <h2>Junior Software Engineer</h2>
              <h5>Limendo India Pvt Ltd</h5>
              <h6>June 2022 - January 2024</h6>
            </div>       
          </div>
          <br />
          <div className="experience__content">
            <ul>
              <li>Engineered a CMS with Next.js and React, enhancing content management efficiency by 30% and reducing update times by 25%.</li>
              <li>Led the development of an Analytical Dashboard in React, achieving a 20% improvement in data retrieval speed, facilitating improved decision-making across multiple departments.</li>
              <li>Conducted comprehensive bug analysis and debugging across 100+ components, enhancing code quality by 40% and decreasing system downtime by 15%.</li>
              <li>Collaborated with over 10 stakeholders, accelerating project delivery by 20% and aligning feature implementation with project goals.</li>
            </ul>
          </div>
        </div>

        {/* Capgemini Experience */}
        <div className="experience__backend">
          <div className="experience__header">
          <img
              src={Capgemini} /* Replace with actual path to Capgemini logo */
              alt="Capgemini Logo"
              className="experience__image"
            />
            <div className="experience__text">
              <h2>Software Engineer</h2>
              <h5>Capgemini India</h5>
              <h6>May 2021 - May 2022</h6>
            </div>   
          </div>
          <br />
          <div className="experience__content">
            <ul>
              <li>Worked as a front-end developer focusing on React.js for a top insurance project.</li>
              <li>Directed the adoption of the Remix framework, enhancing application performance significantly.</li>
              <li>Achieved a high bug resolution rate through meticulous analysis and debugging practices, ensuring robust application reliability.</li>
              <li>Championed code review processes, maintaining superior code quality and fostering a collaborative environment within the team.</li>
            </ul>
          </div>
        </div>

        {/* RedHat Partner Freelance Experience */}
        <div className="experience__backend">
          <div className="experience__header">
          <img
              src={Redhat} /* Replace with actual path to RedHat logo */
              alt="RedHat Logo"
              className="experience__image"
            />
            <div className="experience__text">
              <h2>Freelancer, RedHat Partner</h2>
              <h5>July 6th - August 1st, 2024</h5>
            </div>  
          </div>
          <br />
          <div className="experience__content">
            <ul>
              <li>Freelanced as a RedHat Partner, focusing on lead generation and enhancing outreach efforts.</li>
              <li>Collaborated closely with the team to identify potential leads and develop strategies, contributing significantly to the outreach campaigns.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

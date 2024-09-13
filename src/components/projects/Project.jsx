import React from 'react';
import './project.css';

const data = [
  {
    id: 1,
    title: 'Apartment Security Management',
    github: 'https://github.com/adik1999i/ApartmentSecurityManagement',
  },
  {
    id: 2,
    title: 'Personal Portfolio Project',
    github: 'https://github.com/adik1999i/portfolio',
  },
];

const Project = () => {
  return (
    <section id='project'>
      <h5>My Work Till Now</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, title, github }) => {
          return (
            <article key={id} className='project__item'>
              <div className="project__item-image">
                {/* Add project image here if needed */}
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

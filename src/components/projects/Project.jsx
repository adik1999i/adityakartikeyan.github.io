// Project.js
import React, { useState } from 'react';
import './project.css';

// Project data
const data = [
  {
    id: 1,
    title: 'Apartment Security Management',
    github: 'https://github.com/adik1999i/ApartmentSecurityManagement',
    name_of_site: 'Github',
  },
  {
    id: 2,
    title: 'Personal Portfolio Project',
    github: 'https://github.com/adik1999i/portfolio',
    name_of_site: 'Github',
  },
  {
    id: 3,
    title: 'Figma Design Peer Mentoring',
    github: 'https://www.figma.com/proto/ZcmFOvlGa1ypno5SnGSCRS/MentorMind-Peer-mentoring?t=bb5TQxmDWgtLRSom-1&node-id=15-208&starting-point-node-id=15%3A208',
    name_of_site: 'Figma',
  },
  {
    id: 4,
    title: 'Figma MindCareAI',
    github: 'https://www.figma.com/proto/QSzdoCzRinRSkzESsF6Cnk/MindCare?t=bb5TQxmDWgtLRSom-1',
    name_of_site: 'Figma',
  },
];

const Project = () => {
  // State to manage selected filter
  const [filter, setFilter] = useState('All');

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter projects based on the selected filter
  const filteredProjects = data.filter((project) =>
    filter === 'All' ? true : project.name_of_site === filter
  );

  return (
    <section id='project'>
      <h5>My Work Till Now</h5>
      <h2>Projects</h2>

      {/* Filter Dropdown */}
      <div className="project__filter">
        <label htmlFor="filter">Filter by Type:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Github">Github</option>
          <option value="Figma">Figma</option>
        </select>
      </div>

      {/* Project Container */}
      <div className="container project__container">
        {filteredProjects.map(({ id, title, github, name_of_site }) => {
          return (
            <article key={id} className='project__item'>
              <div className="project__item-image">
                {/* Optional: Add project image here */}
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">
                  {name_of_site}
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

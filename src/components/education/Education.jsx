import React from 'react';
import './education.css';
//import { FaGraduationCap } from 'react-icons/fa';

// Updated education data without the USYD marks card
const educationData = [
  {
    title: 'Master of Commerce (Extension), Business Analytics',
    institution: 'University of Sydney',
    year: '2024 - Present',
    description:
      'Currently pursuing a Master’s in Business Analytics, specializing in data-driven decision-making and advanced analytical skills.',
    image: require('../../assets/usyd-placeholder.png'), // Use a placeholder image
    link: '#', // You can leave this as "#" or direct to an overview page if available
  },
  {
    title: 'B.Tech in Information Technology',
    institution: 'SRM Institute of Science & Technology',
    year: '2017 - 2021',
    description:
      'Graduated with a GPA of 3.53/4 (88.26%), specializing in software development, data structures, and IT management.',
    image: require('../../assets/srm-marks-card-preview.png'), // Replace with actual path
    link: require('../../assets/SRM_Marks_Card.pdf'), // Replace with actual path
  },
];

const Education = () => {
  return (
    <section id='education'>
      <h5>My Academic</h5>
      <h2>Education</h2>

      <div className='container education__container'>
        {educationData.map((edu, index) => (
          <article key={index} className='education'>
            <div className='education__image'>
              <a href={edu.link} target='_blank' rel='noopener noreferrer'>
                <img src={edu.image} alt={edu.title} />
              </a>
            </div>
            <div className='education__details'>
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <small>{edu.year}</small>
              <p>{edu.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;

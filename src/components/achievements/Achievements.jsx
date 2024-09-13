import React from 'react';
import './achievements.css';
//import { FaTrophy } from 'react-icons/fa';

// Sample data structure for achievements with images and links stored in the assets folder
const achievements = [
  {
    title: 'Make a Real Difference Competition 2024',
    description:
      'One of 10 groups selected out of 1,700 participants. Developed a tech solution to bridge the digital gap between urban and rural areas. Presented to industry leaders including Nestlé and KPMG.',
    image: require('../../assets/mard-certificate-preview.png'), // Adjust path as needed
    link: require('../../assets/MARD_certificate.pdf'), // Adjust path as needed
  },
  {
    title: 'Karel Competition Achievement',
    description:
      'Achieved 17th place in the Karel Competition at the University of Sydney Business Analytics Discipline.',
    image: require('../../assets/karel-certificate-preview.png'), // Adjust path as needed
    link: require('../../assets/Karel_certificate.pdf'), // Adjust path as needed
  },
  {
    title: 'Facilitator, Design Thinking Workshop',
    description:
      "Led a Design Thinking workshop for 50 master's students as part of the INFS5002 course, University of Sydney.",
    image: require('../../assets/design-thinking-workshop-preview.png'), // Adjust path as needed
    link: require('../../assets/Design_Thinking_Workshop_certificate.pdf'), // Adjust path as needed
  },
];

const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Milestones</h5>
      <h2>My Achievements</h2>

      <div className='container achievements__container'>
        {achievements.map((achievement, index) => (
          <article key={index} className='achievement'>
            <div className='achievement__image'>
              <a href={achievement.link} target='_blank' rel='noopener noreferrer'>
                <img src={achievement.image} alt={achievement.title} />
              </a>
            </div>
            <div className='achievement__details'>
              <h3>{achievement.title}</h3>
              <small>{achievement.description}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

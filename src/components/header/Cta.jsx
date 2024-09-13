import React from 'react'
import CV from '../../assets/Resume.pdf'
const Cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Connect</a>

    </div>
  )
}

export default Cta
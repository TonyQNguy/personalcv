import React from 'react'
import './cta.css'
import CV from '../../assets/TonyNguyenResume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA
import React from 'react'
import './about.css'
import myImage from '../../assets/Headshot.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.S. Computer Science 
                    <br />
                    Minor in Business 
                    <br />
                    <i>University of Georgia</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.47</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Applications</li>
                      <li>Full-stack</li>
                      <li>Business</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Hello! I'm Tony Nguyen, a Computer Science major with a Business Minor at The University of Georgia, on track to graduate in May 2025. 
            I'm on the lookout for internships, co-ops, and full-time opportunities to dive into the dynamic world of technology.
            My passion lies in transforming ideas into reality through code. I've actively participated in Hackathons, 
            where I've crafted applications using technologies like <b> React, Node.js, HTML, CSS, JavaScript, Flutter, and Dart </b>. On the backend, 
            I've worked with <b>Python, MongoDB, and MySQL,</b> contributing to well-rounded, full-stack development    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/MusicMe.png'
import IMG2 from '../../assets/ArtistSearch.jpeg'
import IMG3 from '../../assets/StyleCast.png'
import IMG4 from '../../assets/ChefItUp.png'
import IMG5 from '../../assets/ComicCache.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Music Me</h3>
            <small className='text-light'>Flutter | Dart | Xcode </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/TonyQNguy/musicme" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Chef It Up</h3>
            <small className='text-light'>Flutter | Yummly API | Dart | Xcode</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/TonyQNguy/chefitup" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Comic Cache</h3>
            <small className='text-light'>Flutter | Dart | Xcode</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/TonyQNguy/comiccacheapp" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>StyleCast</h3>
            <small className='text-light'> ReactJS | HTML | CSS | JavaScript | MongoDB </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/TonyQNguy/stylecast" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Artist Search</h3>
            <small className='text-light'>Python | Spotify Developer API </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/TonyQNguy/ArtistSearch" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>

      </div>
    </section>
  )
}

export default Myprojects
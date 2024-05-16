import React from 'react'
import image from './asset/image 1877.png'
import "../styles/hero.css"
import { HashLink } from 'react-router-hash-link';
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-1">
        <h3 className="hero-1-tagline">Building Tomorrow's Infrastructure Today </h3>
        <h1 className="hero-1-tagline-2">Where <span>Expertise</span> Meets Innovation</h1>
        <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/#core-sectors" className="hash-link"><button className="wwt-button hero-button">Know More</button></HashLink>
      </div>
      <div id='hero-img-div'className="hero-2-con">
        <div className='hero-2-gridcell hero-2-left'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-right'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-left'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-right'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-left'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-right'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-left'><img src={image} alt="" className='hero-img'/></div>
        <div className='hero-2-gridcell hero-2-right'><img src={image} alt="" className='hero-img'/></div>
      </div>
    </div>
  )
}

export default Hero

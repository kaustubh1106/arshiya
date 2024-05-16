import React from 'react'
import { useEffect } from 'react'
import Hero from './Hero'
import CoreSector from './CoreSector'
import '../styles/Home.css'
import Glance from './Glance'
import Contact from './Contact'
const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
      scrollToTop()
    }, [])
    return (
        <div >
            <Hero/>
            <CoreSector />
            <Glance/>
            <Contact/>
        </div>
    )
}

export default Home

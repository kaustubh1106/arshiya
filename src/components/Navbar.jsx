import React from 'react'
import { useEffect } from 'react'
import logo from './asset/Frame 1.svg'
import "../styles/Navbar.css"
// import 'img';,
import "./asset/Frame 1.svg"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    useEffect(() => {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const links = document.querySelectorAll('.links-nav-1');

        const handleChange = () => {
            if (!checkbox.checked) {
                links.forEach(link => {
                    link.style.display = 'none';
                });
            } else {
                links.forEach(link => {
                    link.style.display = 'inline-block';
                });
            }
        };

        checkbox.addEventListener('change', handleChange);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            checkbox.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div className='nav-con'>
            <img src={logo} className='logo-nav' />
            <div className='links-nav'>
                <Link to='/' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Home</button></Link>
                <Link to='/aboutus' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">About us</button></Link>
                <Link to='/empanelment' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Empanelment</button></Link>
                <Link to='/projects' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Projects</button></Link>
                <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to='/#core-sectors' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Sectors</button></HashLink>
                <Link to='/services' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Services</button></Link>
                <Link to='/clientele' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Clientele</button></Link>
                <Link to='/career/testimonials' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Career</button></Link>
                <HashLink to='/#contact-us' className='links-nav-1'><button type="button" class="btn btn-outline-light hamburger-butn">Contact</button></HashLink>
                <label className="hamburger-menu">
                    <input type="checkbox" />
                </label>


            </div>
        </div>
    )
}

export default Navbar

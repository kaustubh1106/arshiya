import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_sector.css";
import { useEffect } from 'react';

const InfrastructurePlanning = () => {
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
    <div className='wwt-main'>
      <div className='wwt-con'>
        <span>Infrastructure Planning</span>
        <h3>What do we offer?</h3>
      </div>
      <div className="wwt-routes">
      <HashLink to="/sector/infrastructure-planning" className="hash-link"><button className="wwt-button">Infrastructure Planning</button></HashLink>
        <HashLink to="/sector/drinking-water" className="hash-link"><button className="wwt-button">Drinking Water</button></HashLink>
        <HashLink to="/sector/waste-water-treatment" className="hash-link"><button className="wwt-button">Waste Water Treatment</button></HashLink>
        <HashLink to="/sector/transportation" className="hash-link"><button className="wwt-button">Transportation</button></HashLink>
      </div>
      <div className="wwt-info">
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Infrastructure Planning and Design (IPD)</span> shapes the built environment of regional, urban, and industrial scale projects with a focus on sustainability. Our expertise stems from our multi-disciplinary team integrating urban planning, design, and infrastructure to ensure balance between environment, community, and development. Our work provides the foundation for successful project implementation by developing strategic frameworks for growth. Integration of disciplines and systems is our forte.<br /><br />
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Infrastructure Planning & Design</span> creates a platform for the assimilation of planning initiatives with hardcore engineering. The aim of the IPD team is to provide innovative and sustainable planning solutions through integration of contemporary planning concepts and cutting-edge technology delivered by our multi-disciplinary team. Infrastructure Strategy and Planning services evaluate and prioritize IT optimization options and define a road map of activities that can reduce costs and improve utilization using time-tested methods and best-practice analysis.<br /><br />
        Through our Infrastructure planning and design services, we are helping organizations re-evaluate and reconstruct their IT environment to align with business goals. A robust, flexible infrastructure is key to optimizing your IT investments and incorporating new capabilities into your existing organization.<br /><br />
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>To know our projects in this sector click the following button.</span><br /><br />
        <HashLink to="/projects/infrastructure-planning" className="hash-link"><button className="wwt-button-pro">Projects <i className="fa-solid fa-arrow-right-to-bracket"></i></button></HashLink>
      </div>

    </div>
  );
};

export default InfrastructurePlanning;

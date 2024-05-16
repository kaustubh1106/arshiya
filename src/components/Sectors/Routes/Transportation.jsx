import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_sector.css";
import { useEffect } from 'react';

const Transportation = () => {
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
        <span>Transportation</span>
        <h3>What do we offer?</h3>
      </div>
      <div className="wwt-routes">
        <HashLink to="/sector/infrastructure-planning" className="hash-link"><button className="wwt-button">Infrastructure Planning</button></HashLink>
        <HashLink to="/sector/drinking-water" className="hash-link"><button className="wwt-button">Drinking Water</button></HashLink>
        <HashLink to="/sector/waste-water-treatment" className="hash-link"><button className="wwt-button">Waste Water Treatment</button></HashLink>
        <HashLink to="/sector/transportation" className="hash-link"><button className="wwt-button">Transportation</button></HashLink>
      </div>
      <div className="wwt-info">
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Transportation</span> is the movement of humans, animals, and goods from one location to another. Modes of transport include air, rail, road, water, cable, pipeline, and space. The field can be divided into infrastructure, vehicles, and operations.<br /><br />
        Delivering an appropriate and sustainable transportation network for the 21st century is an exciting challenge. Making transport work, however, must not be at the cost of the environment, and we are focusing our efforts on the role planners, engineers, and consultants have to play in order to respond to the challenges, changes, and opportunities of a carbon-critical economy. By considering carbon-critical design and operations at the outset, we can help shape policy, improve forecasting, and ensure the right investment choices are made.<br /><br />
        Successful transport strategies examine the journeys that people need to make in all aspects of their lives and provide realistic travel options. The services that we provide to our clients range from strategic policy advice and performance management, through all aspects of demand forecasting, behavioral analysis, to accessibility, transport for land development, streetscapes, and traffic engineering design.<br /><br />
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>To know our projects in this sector, click the following button.</span><br /><br />
      <HashLink to="/projects/transportation" className="hash-link"><button className="wwt-button-pro">Projects <i className="fa-solid fa-arrow-right-to-bracket"></i></button></HashLink>
      </div>

    </div>
  );
};

export default Transportation;

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_sector.css";
import { useEffect } from 'react';

const DrinkingWater = () => {
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
        <span>Drinking Water</span>
        <h3>What do we offer?</h3>
      </div>
      <div className="wwt-routes">
        <HashLink to="/sector/infrastructure-planning" className="hash-link"><button className="wwt-button">Infrastructure Planning</button></HashLink>
        <HashLink to="/sector/drinking-water" className="hash-link"><button className="wwt-button">Drinking Water</button></HashLink>
        <HashLink to="/sector/waste-water-treatment" className="hash-link"><button className="wwt-button">Waste Water Treatment</button></HashLink>
        <HashLink to="/sector/transportation" className="hash-link"><button className="wwt-button">Transportation</button></HashLink>
      </div>
      <div className="wwt-info">
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Drinking Water</span> is essential for life. The amount of drinking water required is variable. It depends on physical activity, age, health issues, and environmental conditions. It is estimated that the average American drinks about one litre of water a day with 95% drinking less than three litres per day. For those working in a hot climate, up to 16 liters a day may be required. Water makes up about 60% of weight in men and 55% of weight in women. Infants are about 70% to 80% water while the elderly are around 45%.<br /><br />
        The safety and accessibility of drinking-water are major concerns throughout the world. Health risks may arise from consumption of water contaminated with infectious agents, toxic chemicals, and radiological hazards.<br /><br />
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Understanding the Water Business.</span> The successful design, development, and maintenance of our water infrastructure require the integration of many disciplines. Arshiya Consulting Engineers water team has wide-ranging skills spanning advisory and specialist technical services. We apply them on every kind of project, from flood risk management and water resource planning, to dam engineering, treatment works design, and river engineering.<br /><br />
        By understanding and influencing the whole water cycle, we have developed particular expertise that enables us to assess risks and support our clients in taking a strategic approach to water usage and management.<br /><br />
        Our analysis and design have involved flow control and monitoring facilities including metering, pressure regulating, and surge protection systems. We have evaluated pipeline rehabilitation techniques and designed improvements to extend the useful life of existing buried infrastructure.<br /><br />
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>To know our projects in this sector click the following button.</span><br /><br />
        <HashLink to="/projects/drinking-water" className="hash-link"><button className="wwt-button-pro">Projects <i className="fa-solid fa-arrow-right-to-bracket"></i></button></HashLink>
      </div>

    </div>
  );
};

export default DrinkingWater;

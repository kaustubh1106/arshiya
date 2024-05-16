import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_sector.css";
import { useEffect } from 'react';

const WasteWaterTreatment = () => {
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
                <span>Waste Water Treatment</span>
                <h3>What do we offer?</h3>
            </div>
            <div className="wwt-routes">

                <HashLink to="/sector/infrastructure-planning" className="hash-link"><button className="wwt-button">Infrastructure Planning</button></HashLink>
                <HashLink to="/sector/drinking-water" className="hash-link"><button className="wwt-button">Drinking Water</button></HashLink>
                <HashLink to="/sector/waste-water-treatment" className="hash-link"><button className="wwt-button">Waste Water Treatment</button></HashLink>
                <HashLink to="/sector/transportation" className="hash-link"><button className="wwt-button">Transportation</button></HashLink>
            </div>
            <div className="wwt-info">
                <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Wastewater treatment</span> is a process used to convert wastewater – which is water no longer needed or suitable for its most recent use – into an effluent that can be either returned to the water cycle with minimal environmental issues or reused.<br /><br />
                Wastewater is full of contaminants including bacteria, chemicals and other toxins. Its treatment aims at reducing the contaminants to acceptable levels to make the water safe for discharge back into the environment.<br /><br />
                The principal objective of wastewater treatment is generally to allow human and industrial effluents to be disposed of without danger to human health or unacceptable damage to the natural environment. Irrigation with wastewater is both disposal and utilization and indeed is an effective form of wastewater disposal (as in slow-rate land treatment). However, some degree of treatment must normally be provided to raw municipal wastewater before it can be used for agricultural or landscape irrigation or for aquaculture. The quality of treated effluent used in agriculture has a great influence on the operation and performance of the wastewater-soil-plant or aquaculture system.<br /><br />
                Our services for this sector are divided into the following categories :-<br />
                <span style={{ color: "#161644", fontSize: "18px", fontWeight: "600" }}>
                    <ul>
                        <li>Drainage</li>
                        <li>Sewerage System</li>
                        <li>Rehabilitation of STP</li>
                    </ul>
                </span><br/>
                <HashLink to="/projects/waste-water-treatment" className="hash-link"><button className="wwt-button-pro">Projects <i className="fa-solid fa-arrow-right-to-bracket"></i></button></HashLink>
            </div>
        </div>
    );
};

export default WasteWaterTreatment;

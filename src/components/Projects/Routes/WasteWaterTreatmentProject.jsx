import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_project.css";
import img1 from "../asset/Union.svg";
import img3 from "../asset/Sewerage.png";
import img4 from "../asset/Storm-water-drainage.png";
import img6 from "../asset/Water-audit.png";
import { useEffect } from 'react';
const WasteWaterTreatmentProject = () => {
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
        <div className='pro-main'>
            <div className='pro-con'>
                <span>Projects/Waste Water Treatment</span>
                <h3>What we have done</h3>
            </div>
            <div className="pro-routes">
                <HashLink to="/projects/infrastructure-planning" className="hash-link"><button className="pro-button">Infrastructure Planning</button></HashLink>
                <HashLink to="/projects/drinking-water" className="hash-link"><button className="pro-button">Drinking Water</button></HashLink>
                <HashLink to="/projects/waste-water-treatment" className="hash-link"><button className="pro-button">Waste Water Treatment</button></HashLink>
                <HashLink to="/projects/transportation" className="hash-link"><button className="pro-button">Transportation</button></HashLink>
            </div>
            <div className="wwt-info">
                <span style={{ color: "#161644", fontSize: "18px", fontWeight: "600" }}>Wastewater</span> can originate from a combination of domestic, industrial, commercial, or agricultural activities, surface runoff or stormwater, and from sewer inflow or infiltration.
                <br /><br />
                <br />
                <span style={{ color: "#161644", fontSize: "18px", fontWeight: "600" }}>
                    Our projects for this sector are divided into three categories:
                </span>
                <div className="pro-info">
                    <div className="pro-2-grid">
                        <div className="pro-2-g-con">
                            <img src={img4} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/waste-water/Drainage">
                                    <button>
                                        <div>Drainage</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                        <div className="pro-2-g-con">
                            <img src={img1} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/waste-water/rehabilitation-of-stp">
                                    <button>
                                        <div>Rehabilitation of STP</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                        <div className="pro-2-g-con">
                            <img src={img3} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/waste-water/sewerage-system">
                                    <button>
                                        <div>Sewerage System</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default WasteWaterTreatmentProject

// <ul>
//     <li>Drainage</li>
//     <li>Sewerage System</li>
//     <li>Rehabilitation of STP</li>
// </ul>
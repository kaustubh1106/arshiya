import React from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
// Import pictures
import img1 from "../asset/Union.svg";
import img2 from "../asset/Services/Engineering Design & Project Management Consultancy.png";
import img3 from "../asset/Services/Sewerage.png";
import img4 from "../asset/Services/Storm-water-drainage.png";
import img5 from "../asset/Services/Waste-water-treatment.png";
import img6 from "../asset/Services/Water-audit.png";
import img7 from "../asset/Services/logo.png";
// Import CSS
import "../styles/Side.css";

const Side = () => {
    return (
        <div className='container'>
            <div className="grid">
                <div className="grid-cell one">
                    <HashLink smooth to="/services/storm-water-drainage">
                        <img src={img1} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell two">
                    <HashLink smooth to="/services/water-supply">
                        <img src={img2} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell three">
                    <HashLink smooth to="/services/sewerage-system">
                        <img src={img3} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell four">
                    <HashLink smooth to="/services/water-audit">
                        <img src={img4} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell five">
                    <HashLink smooth to="/services/waste-water-treatment">
                        <img src={img5} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell six">
                    <HashLink smooth to="/services/engineering-design-project-management-consultancy">
                        <img src={img6} alt="" />
                    </HashLink>
                </div>
                <div className="grid-cell seven">
                    <HashLink smooth to="/">
                        <img src={img7} alt="" />
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default Side;

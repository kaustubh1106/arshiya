import React from 'react';
import Side from './Side';
import "../styles/Stormwater.css";
import { useEffect } from 'react';
const WaterAudit = () => {
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
        <div className='main'>
            <Side />
            <div className='st-con'>
                <span>Water Audit</span>
                <h3>What do we offer?</h3>
                <div className="un">
                    <ul>
                        <li>Preparation of Pre-feasibility</li>
                        <li>Feasibility report</li>
                        <li>Master Planning, Hydraulic modeling</li>
                        <li>Detailed Project Reports</li>
                        <li>Design for Treatment Plant including</li>
                        <li>Detailed field investigations</li>
                        <li>Tender stage designs & preparation of technical specifications</li>
                        <li>Bid documents for contract packages</li>
                        <li>Construction stage detailed engineering for civil,</li>
                        <li>Electro-mechanical & hydro-mechanical works</li>
                        <li>Project Management Consultancy including construction</li>
                        <li>supervision work and monitoring of progress</li>
                        <li>Quality assurance and control</li>
                        <li>Flow monitoring</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WaterAudit;

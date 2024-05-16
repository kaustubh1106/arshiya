import React from 'react';
import Side from './Side';
import "../styles/Stormwater.css";
import { useEffect } from 'react';

const EngineeringDesignProjectManagementConsultancy = () => {
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
        <span>Engineering Design & Project Management Consultancy</span>
        <h3>What do we offer?</h3>
        <div className="un">
          <ul>
            <li>Preparation of Pre-feasibility</li>
            <li>Feasibility report</li>
            <li>Master Planning, Hydraulic modeling</li>
            <li>Detailed Project Reports</li>
            <li>Design for Treatment Plant including</li>
            <li>Detailed field investigations</li>
            <li>Tender stage designs & technical specifications</li>
            <li>Bid documents for contract packages</li>
            <li>Construction stage detailed engineering for civil,</li>
            <li>Electro-mechanical & hydro-mechanical works</li>
            <li>Project Management Consultancy</li>
            <li>Quality assurance and control</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EngineeringDesignProjectManagementConsultancy;

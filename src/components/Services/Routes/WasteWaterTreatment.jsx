import React from 'react';
import Side from './Side';
import "../styles/Stormwater.css";
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
    <div className='main'>
      <Side />
      <div className='st-con'>
        <span>Waste Water Treatment</span>
        <h3>What do we offer?</h3>
        <div className="un">
          <ul>
            <li>Process design</li>
            <li>Civil, electro mechanical unit design</li>
            <li>Tender stage designs & preparation of technical specifications</li>
            <li>Bid documents for contract packages</li>
            <li>Construction stage detailed engineering for civil, Electro-mechanical & hydro-mechanical works</li>
            <li>Project Management Consultancy including construction supervision work and monitoring of progress</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WasteWaterTreatment;

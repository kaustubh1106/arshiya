import React from 'react';
import "./styles/Services.css";

import img1 from "./asset/Union.svg";
import img2 from "./asset/Services/Engineering Design & Project Management Consultancy.png";
import img3 from "./asset/Services/Sewerage.png";
import img4 from "./asset/Services/Storm-water-drainage.png";
import img5 from "./asset/Services/Waste-water-treatment.png";
import img6 from "./asset/Services/Water-audit.png";

import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';
const Services = () => {
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
        <div className='serv'>
            <div className="serv-1">
                {/* <img src={img} alt="" /> */}
                <span>Services</span>
                <h3>What do we offer?</h3>
                <div className='serv-1-para'>
                    <p>
                        Given the diversity of its services and portfolio, ACEPL is able to insert itself at any stage of a project by flexibly offering a variety of <br />individual or combination packages that cover. ACEPL, has undertaken assignments involving the firm in the areas of:-
                    </p>
                </div>
            </div>
            <div className="serv-2 routes">
                <div className="serv-2-grid">
                    <div className="serv-2-g-con">
                        <img src={img4} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/storm-water-drainage">
                                <button>
                                    <div>Storm Water Drainage</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                    <div className="serv-2-g-con">
                        <img src={img1} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/water-supply">
                                <button>
                                    <div>Water Supply</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                    <div className="serv-2-g-con">
                        <img src={img3} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/sewerage-system">
                                <button>
                                    <div>Sewerage System</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                    <div className="serv-2-g-con">
                        <img src={img6} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/water-audit">
                                <button>
                                    <div>Water Audit</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                    <div className="serv-2-g-con">
                        <img src={img5} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/waste-water-treatment">
                                <button>
                                    <div>Waste Water Treatment</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                    <div className="serv-2-g-con">
                        <img src={img2} alt="cant load" />
                        <div className='button'>
                            <HashLink className="hash-link" to="/services/engineering-design-project-management-consultancy">
                                <button>
                                    <div>Engineering Design & Project Management Consultancy</div>
                                </button>
                            </HashLink>
                            <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

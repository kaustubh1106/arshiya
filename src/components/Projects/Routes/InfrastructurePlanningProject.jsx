import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_project.css";
import { useEffect } from 'react';

const InfrastructurePlanningProject = () => {
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
        <span>Projects/Infrastructure Planning</span>
        <h3>What we have done</h3>
      </div>
      <div className="pro-routes">
        <HashLink to="/projects/infrastructure-planning" className="hash-link"><button className="pro-button">Infrastructure Planning</button></HashLink>
        <HashLink to="/projects/drinking-water" className="hash-link"><button className="pro-button">Drinking Water</button></HashLink>
        <HashLink to="/projects/waste-water-treatment" className="hash-link"><button className="pro-button">Waste Water Treatment</button></HashLink>
        <HashLink to="/projects/transportation" className="hash-link"><button className="pro-button">Transportation</button></HashLink>
      </div>
      <div>
      <div className="pro-info">
        <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>Infrastructure Planning and Design (IPD)</span>
        <span> shapes the built environment of regional, urban, and industrial scale projects with a focus on sustainability. Our expertise stems from our multi-disciplinary team integrating urban planning, design, and infrastructure to ensure balance between environment, community, and development. Our work provides the foundation for successful project implementation by developing strategic frameworks for growth. Integration of disciplines and systems is our forte.</span>
        <br />
        <br />
        <span>Infrastructure Planning & Design creates a platform for the assimilation of planning initiatives with hardcore engineering. The aim of the IPD team is to provide innovative and sustainable planning solutions through integration of contemporary planning concepts and cutting-edge technology delivered by our multi-disciplinary team.</span>
        <div className="divider"></div>
        <div className="divider-vertical"></div>
      </div>
      <div className="add-on"></div>
                <div className="pro-timeline">
                    <div className="pro-container left">
                        <div className="pro-content">
                            <h2>2017</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container right">
                        <div className="pro-content">
                            <h2>2016</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container left">
                        <div className="pro-content">
                            <h2>2015</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container right">
                        <div className="pro-content">
                            <h2>2012</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container left">
                        <div className="pro-content">
                            <h2>2011</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container right">
                        <div className="pro-content">
                            <h2>2007</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                    <div className="pro-container left">
                        <div className="pro-content">
                            <h2>2017</h2>
                            <p>
                                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                                perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
                                expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
                                eam.
                            </p>
                        </div>
                    </div>
                </div>

      </div>
    </div>
  );
};

export default InfrastructurePlanningProject;

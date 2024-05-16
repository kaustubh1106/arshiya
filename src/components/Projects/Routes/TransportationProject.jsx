import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../styles/common_project.css";
import { useEffect } from 'react';

const TransportationProject = () => {
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
                <span>Projects/Transportation</span>
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
                    <span style={{ color: "#161644", fontSize: "24px", fontWeight: "600" }}>ACEPL</span>
                    <span> is at the forefront of Transport engineering. We help clients around the world to provide safe, efficient and cost-effective transport systems that deliver real benefits to the community.</span>
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

export default TransportationProject;

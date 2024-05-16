import React from 'react'
import { HashLink } from 'react-router-hash-link';
import "../styles/common_project.css";
import { useEffect } from 'react';
const DrinkingWaterProject = () => {
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
        <span>Projects/Drinking Water</span>
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
        <span>While India’s economy continues to grow rapidly, hundreds of millions of people across the country still live with poverty, malnutrition, unhygienic living conditions, and without access to clean drinking water. About a third of the world’s poor live in India, battling blatant gender and class inequalities to climb out of poverty. Safe drinking water and improved sanitation can give these families a chance for healthier, happier lives.</span>
        <br />
        <br />
        <span>We provide an integrated range of advisory, design and technical skills to ensure that the entire process of delivering water / waste water related infrastructure runs smoothly and efficiently.</span>
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
  )
}

export default DrinkingWaterProject

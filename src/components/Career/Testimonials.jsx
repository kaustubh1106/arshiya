import React from 'react'
import { useEffect } from 'react';

const Testimonials = () => {
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
        <span>Career/Testimonials</span>
        <h3>What Our Employees Say</h3>
      </div>
      <div>
        <div className="divider"></div>
                    <div className="divider-vertical"></div>
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

export default Testimonials

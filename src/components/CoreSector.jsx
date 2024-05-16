import React from 'react';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import '../styles/CoreSector.css';
import transport from "./asset/transport_icon.jpeg";
import water from "./asset/waste-water-treatment.jpeg";
import drink from "./asset/drinking-water.jpeg";
import plan from "./asset/imfrastructure-&-planning.jpeg";


const CoreSector = () => {
    
    return (
        <div>
            <div className='home-core' id="core-sectors">
                <h1>Core Sector</h1>
                
                <div className='home-core-cards'>
                    {/* card1 */}
                    <div className="card card-core" >
                        <div>
                            <div className='card-img'><img src={plan} className="card-img-top" alt="..." /></div>
                            <div className="card-body-head">Infrastructure & Planning</div>
                            <div className="card-body-text">
                                <p >Infrastructure planning and design (IPD) shapes the built environment of regional, urban and industrial scale projects with focus on <HashLink className = "hash-link"to="/sector/infrastructure-planning" >Read More</HashLink></p>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card card-core" >
                        <div>
                            <div className='card-img'><img src={water} className="card-img-top" alt="..." /></div>
                            <div className="card-body-head">Waste Water Treatment</div>
                            <div className="card-body-text">
                                <p >Wastewater treatment is a process used to convert wastewater – which is water no longer needed or suitable for its most recent use <HashLink className = "hash-link"to="/sector/waste-water-treatment" >Read More</HashLink></p>
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="card card-core" >
                        <div>
                            <div className='card-img'><img src={drink} className="card-img-top" alt="..." /></div>
                            <div className="card-body-head">Drinking Water</div>
                            <div className="card-body-text">
                                <p >Drinking Water is essential for life. The amount of drinking water required is variable. It depends on physical activity, age, <HashLink className = "hash-link"to="/sector/drinking-water">Read More</HashLink></p>
                            </div>
                        </div>
                    </div>
                    {/* card 2  */}
                    <div className="card card-core" >
                        <div>
                            <div className='card-img' style={{margin:"20px 0px"}}><img src={transport} className="card-img-top" alt="..." /></div>
                            <div className="card-body-head">Transportation</div>
                            <div className="card-body-text">
                                <p >Transportation is the movement of humans, animals and goods from one location to another. Modes of transport include <HashLink className = "hash-link"to="/sector/transportation" >Read More</HashLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreSector;

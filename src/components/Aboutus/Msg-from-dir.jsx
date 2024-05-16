import React from 'react'
import "./styles/about.css"
import img1 from "../asset/msg-fr-dir-1.jpeg"
import img2 from "../asset/msg-fr-dir-2.jpeg"
import img3 from "../asset/msg-fr-dir-3.jpeg"
import sign from "../asset/Sign-Director.jpeg"
const About = () => {
    return (
        <div className='body-about' id="message-from-director">
            {/* --------------Message from Director--------------- */}
            <div className="ab-text" >
                <h1>

                    <span style={{ fontSize: 64, color: "0084FF" }}>Message from Director</span>
                </h1>
                <span style={{ color: "#0084FF" }}>Arshiya Consulting Engineers Pvt. Ltd.</span>&nbsp;ACEPL represents one of India’s fastest growing premier multinational consultancy service firms, with technical 
                prowess and a global footprint, helping multilateral, public and private sector clients in their endeavour to build infrastructure for 
                tomorrow. As a fully-integrated infrastructure firm, we connect unparalleled expertise across services, markets and geographies.<br />
                At <span style={{ color: "#0084FF" }}>ACEPL</span>,&nbsp;we take on every element of an infrastructure project from conceptual or
                 pre-planning stage through commissioning including operation & maintenance and management support. Arshiya offers services ranging 
                 from Master Planning, Feasibility, Environment and Sustainability Management, Architecture, Engineering & Design to Project Management 
                 to all major sectors of infrastructure. The unique feature of Arshiya comprehensive and innovative service is the value addition 
                 imparted to each of its services.<br />We pride ourselves in our ability to listen to clients and understand their immediate and 
                 long term business needs. We always rise above the expectations of our valued Clients and that is why ACEPL has become a trusted 
                 Consulting Engineering organisation. We have nurtured many successful partnerships to evolve most innovative, challenging and 
                 effective infrastructure models across
                  <span style={{ color: "#0084FF" }}>5 countries and 50 cities in three continents viz. Asia, Africa and Europe</span>.<br />
                  <span style={{ color: "#0084FF" }}>Our corporate value system</span> revolves around our core principles of social and environmental responsibility for developing 
                  sustainable solutions. At ACEPL, our utmost motto is to carefully plan the environmental outcome of each of our project. 
                   When we think projects, we think of sustainability.  We work on partnership with our Clients to strive for the twin goals 
                   of project excellence and sustainability.<br/>Our people represent some of the best minds within the industry. We have a unique 
                   culture which is based on meritocracy and fairness. We believe in matrix organisation that is professionally well managed. Ours 
                   is a young company, in years and in attitude. We dream big and we are not afraid to try out even seemingly impossible ideas. 
                   We see ourselves as belonging to the third millennium and are driven to make a mark in every field that we enter.
                    <br/>
                   <img src={sign} style={{width: "210px" , margin: "10px 0px"}}></img><br/>
                   <span style={{color:"#0084FF"}}>Director – Technical</span>
            </div>
            <div className="ab-img">
                <img src={img1} className='img1'></img>
                <img src={img2} className='img2'></img>
                <img src={img3} className='img3'></img>
            </div>
        </div>
    )
}

export default About

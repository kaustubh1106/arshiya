import React from 'react'
import "./styles/about.css"
import img1 from "../asset/msg-fr-dir-1.jpeg"
import img2 from "../asset/msg-fr-dir-2.jpeg"
import img3 from "../asset/msg-fr-dir-3.jpeg"
const About = () => {
    return (
        <div className='body-about' id="about-section">
            {/* ---------------About us--------------- */}
            <div className="ab-text">
                <h1>
                
                    <span style={{ fontSize: 64, color:"0084FF" }}>About us</span>
                </h1>
                <span style={{color:"#0084FF"}}>Arshiya Consulting Engineers Pvt. Ltd.</span>&nbsp;is a multidisciplinary
                consultancy firm incorporated in India.<br/> ACEPL&nbsp;caters to a wide spectrum
                of services and ensures value addition at every stage of project development
                in preparation of pre-feasibility, feasibility and detail project reports
                based on detailed field investigations of Water Supply, Flood management,
                and wastewater, treatment of water and wastewater sector. The experts of the
                Company have vast experience in management of Integrated Water Resource
                Management in mid-humid, arid and snow covered areas through the sustainable
                solution.<br/> <span style={{color:"#0084FF"}}>ACEPL</span>,&nbsp;comprises of a strong workforce of skilled staff that
                is managed by a highly professional team that ensures timely delivery of a
                project. Our competencies are based on the strengths and diverse backgrounds
                of its international team members. We have extensive domestic &amp;
                International expertise and have the presence in the Indian subcontinent.
                Overseas Projects handled by the individual key team member.<br/> The company
                boasts itself to be a one-stop solution for all types of Engineering &amp;
                Design, Management solutions, as it offers a full range of technical
                services in accordance with client needs, program, regulatory authorities,
                and budget.<br/>Our team of in-house and external Consultants has wide
                experience of having worked on similar assignments National &amp;
                Internationally and thus has an in-depth knowledge of all aspects of the
                deliverables expected in these assignments. Our team member is having a
                membership with the national and international organization such as
                Institute of Civil Engineers (ICE) – UK, CIWEM – UK, Institution of
                Engineers (India) (IEI).
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

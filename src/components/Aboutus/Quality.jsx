import React from 'react'
import "./styles/quality.css"
import img1 from "../asset/cert1.jpg"
import img2 from "../asset/cert2.jpg"

const Quality = () => {
  return (
    <div className='quality' id="quality-and-certification">
      <div className='qu-po'>
        <h1>Quality policy & Certifications</h1>
        We at ACEPL shall aim to achieve and sustain excellence in all our solutions and activities in Infrastructure design, Project Management, Environment Management and Sustainability Advisory Services.<br/>
        We shall always endeavor to produce and deliver superior quality services and maintain credibility in the market for the quality of our deliverables and services all the times.<br/>
        We are further committed to develop a motivated team with a sense of pride in the organization which will lead us towards being the best as design Engineering Firm and work in harmony with the environment and sustainability.<br/>
        We ensure that all our services/assignments are based on authentic primary and secondary data; appropriate data interpretation, analysis and assessment; practical management plans to ensure that our assessments not only lead to timely regulatory/statutory clearances and compliance management systems but also benefit clients in meeting their long-term environmental and sustainability goals, effectively and efficiently.<br/>
        To offer highest quality service, we ensure continual improvement by way of regularly updating knowledge of all team members including empaneled experts, through in-house training, literature studies, online references and participation in relevant seminars/workshops.<br/>
        Performance review of our output and that of our in-house/empaneled experts is done on regular basis through a review mechanism to ensure continual improvement.<br/>
        Communication with clients is ensured to maintain quality at all times at all levels.
We focus on customer satisfaction by ensuring the highest quality of output; timely completion of assignments; regular communication with clients and updating them of changing regulatory requirements; to ensure that timely 
      </div>
      <div className='cer'>
        <img src={img1}></img>
        <div className='cer-1-tx'>ACEPL’s Quality Management System complies with ISO 9001:2015 specifications. The company has been certified to provide consultancy services in the field of infrastructure and real estate. This certification is valid till May  2020.</div>
        <img src={img2}></img>
        <div className='cer-2-tx'>
        ACEPL’s Quality Management System complies with ISO 14001:2015 specifications. The company has been certified to provide consultancy services in the field of infrastructure and real estate. This certification is valid till May  2020.
        </div>
      </div>
    </div>
  )
}

export default Quality

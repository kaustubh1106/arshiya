import React from 'react'
import "./styles/job.css"
import { useEffect } from 'react';
const JobApplication = () => {
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
    <div className='job-main'>
       <div className='pro-con'>
        <span>Career/Job Applications</span>
        <h3>Come Join Us</h3>
      </div>
      <div className="job-form">

      <div className="cu-form cu-flex">
                <div className="cu-form-1">
                    <input
                        type="email"
                        className="cu-form-name"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        className="cu-form-name"
                        placeholder="Mobile Number"
                    />
                </div>
                    <input
                        type="email"
                        className="cu-form-email"
                        placeholder="Email"
                    />
                    <input
                        type="email"
                        className="cu-form-email"
                        placeholder="Field of Work"
                    />
                    
                    <input class="form-control" type="file" id="formFileMultiple" ></input>
                <div className="cu-form-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Tell Us about Yourself" rows="3"></textarea>
                </div>
                <div className='cu-form-3'>
                    <button className='submit'> Submit </button>
                </div>
            </div>
      </div>
    
    </div>
  )
}

export default JobApplication

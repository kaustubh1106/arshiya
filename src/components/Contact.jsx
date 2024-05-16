import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
    return (
        <div className='cu' id="contact-us">
            <div className="cu-con cu-flex">
                <h1 className='cu-he'>Contact us</h1>
                <p>
                    C/3114, Green Field Colony<br/>
                    Mirza Galib Road, near Suraj Kund Road,
                    Faridabad-121010<br/>
                </p>
            </div>
            <div className="cu-form cu-flex">
                <div className="cu-form-1 job-form">
                    <input
                        type="email"
                        className="cu-form-name"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        className="cu-form-name"
                        placeholder="Email"
                    />
                </div>

                <div className="cu-form-2">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write your Message" rows="3"></textarea>
                </div>
                <div className='cu-form-3'>
                    <button className='submit'> Submit </button>
                </div>
            </div>
        </div>
    )
}

export default Contact

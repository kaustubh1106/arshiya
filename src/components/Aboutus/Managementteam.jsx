import React from 'react'
import "./styles/manteam.css"
import dir from "../asset/director.png"

const Managementteam = () => {
    return (
        <div className="main1" id="management-team">
            <h1>Management Team</h1>
            <div className='mt-main' >

                <div className="mt-img-1">
                    <img src={dir} />
                    <div className="info-1">
                        <div className='na-po'>
                            <h3>Deepak Sharma</h3>
                            <h5>Director Technical</h5>
                        </div>

                        <div className="icons">
                            <div><i class="fa-brands fa-linkedin fa-2xl"></i></div>
                            <div> <i class="fa-brands fa-square-facebook fa-2xl"></i></div>
                        </div>
                    </div>
                </div>
                <div className="mt-img-1">
                    <img src={dir} />
                    <div className="info-1">
                        <div className='na-po'>
                            <h3>Neha Sharma</h3>
                            <h5>Director Finance</h5>
                        </div>

                        <div className="icons">
                            <div><i class="fa-brands fa-linkedin fa-2xl"></i></div>
                            <div> <i class="fa-brands fa-square-facebook fa-2xl"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Managementteam

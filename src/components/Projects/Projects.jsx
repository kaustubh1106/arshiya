import React from 'react'
import img1 from "./asset/Union.svg";
import img3 from "./asset/Sewerage.png";
import img4 from "./asset/Storm-water-drainage.png";
import img6 from "./asset/Water-audit.png";
import { HashLink } from 'react-router-hash-link';
import "./styles/projects.css"
const Projects = () => {
  return (
    <div className='projects-main'>
        <div className='wwt-con'>
        <span>Projects</span>
        <h3>What we have done till now</h3>
      </div>
      <br/>
      <div className="pro-info">
                    <div className="pro-2-grid">
                        <div className="pro-2-g-con">
                            <img src={img4} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/infrastructure-planning">
                                    <button>
                                        <div>Infrastructe Planning</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                        <div className="pro-2-g-con">
                            <img src={img1} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/drinking-water">
                                    <button>
                                        <div>Drinking Water</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                        <div className="pro-2-g-con">
                            <img src={img3} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/waste-water-treatment">
                                    <button>
                                        <div>Waste Water Treatment</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                        <div className="pro-2-g-con project-4">
                            <img src={img6} alt="cant load" />
                            <div className='button'>
                                <HashLink className="hash-link" to="/projects/transportation">
                                    <button>
                                        <div>Transportation</div>
                                    </button>
                                </HashLink>
                                <div><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                            </div>
                        </div>
                    </div>

                </div>
      
    </div>
  )
}

export default Projects

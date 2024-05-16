import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import footerlogo from './asset/Arshiya.svg';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-div ft-div-1" style={{ display: "flex" }}>
        <div className="ft-div-1-log-add">
          <div className="ft-div-1-logo">
          <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/"><img
              src={footerlogo}
              className="card-img-top"
              alt="..."
              style={{ width: 200, height: 100 }}
            /></HashLink>
          </div>
          <div
            className="ft-div-1-contact"
            style={{ textAlign: "left", color: "#ffff" }}
          >
            C/3114, Green Field Colony
            <br />
            Mirza Galib Road, near Suraj Kund Road,
            <br />
            Faridabad-121010
          </div>
        </div>
        <div className="ft-div-1-tb">
          <div className="ft-div-1-tb-ab">
            <span>
              <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/aboutus#about-section">About Us</HashLink>
            </span>
            <br />
            <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/aboutus#message-from-director">Message From The Director</HashLink>

            <br />
            <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/aboutus#quality-and-certification">Quality Policy</HashLink>

            <br />
            <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/aboutus#quality-and-certification">Certification</HashLink>

            <br />
            <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/aboutus#management-team">Management Team</HashLink>

            <br />
          </div>
          <div className="ft-div-1-tb-sc">
            <span>
              <HashLink className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/#core-sectors">Sectors</HashLink>
            </span>
            <br />
            <Link className="hashlink" to="/sector/infrastructure-planning">Infrastructure Planning and Design</Link>

            <br />
            <Link className="hashlink" to="/sector/drinking-water">Drinking Water</Link>
            <br />
            <Link className="hashlink" to="/sector/waste-water-treatment">Waste Water Treatment</Link>
            <br />
            <Link className="hashlink" to="/sector/transportation">Transportation</Link>
            <br />
          </div>

          <div className="ft-div-1-tb-sv">
            <span><Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services">Services</Link></span>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/storm-water-drainage">Storm water Drainage</Link>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/water-supply">Water supply</Link>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/sewerage-system">Sewerage System</Link>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/water-audit">Water Audit</Link>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/waste-water-treatment">Waste water Treatment</Link>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/services/engineering-design-project-management-consultancy">Engineering Design & Project <br />Management Consultancy</Link>
            <br />
          </div>
          <div className="ft-div-1-tb-car">
            <span>Careers</span>
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/career/job-application">Job Applications</Link>
            
            <br />
            <Link className="hashlink" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="/career/testimonials">Testimonials</Link>
            <br />
          </div>
        </div>
      </div>
      <div className="ft-div ft-div-2">
        <div className="ft-div-c">©Arshiya Consulting Engineers Pvt. Ltd. 2017</div>
        <div className="ft-div-icons " style={{ gap: 32 }}>
          <i className="fa-brands fa-facebook fa-xl" />
          <i className="fa-brands fa-instagram fa-xl" />
          <i className="fa-brands fa-twitter fa-xl" />
          <i className="fa-brands fa-linkedin fa-xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;



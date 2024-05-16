import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/Aboutus_compiled.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services/Services.jsx';
import Watersupply from './components/Services/Routes/Watersupply.jsx';
import Stormwater from './components/Services/Routes/Stormwater.jsx';
import SewerageSystem from './components/Services/Routes/Seweragesystem.jsx';
import WaterAudit from './components/Services/Routes/WaterAudit.jsx';
import WasteWaterTreatment from './components/Services/Routes/WasteWaterTreatment.jsx';
import EngineeringDesignProjectManagementConsultancy from './components/Services/Routes/EngineeringDesignProjectManagementConsultancy.jsx';
import Empanelment from './components/Empanelment/Empanelment.jsx';
import Clientele from './components/Clientele.jsx';
import InfrastructurePlanning from './components/Sectors/Routes/InfrastructurePlanning.jsx';
import WasteWaterTreatmentSector from './components/Sectors/Routes/WasteWaterTreatment.jsx';
import DrinkingWater from './components/Sectors/Routes/DrinkingWater.jsx';
import Transportation from './components/Sectors/Routes/Transportation.jsx';
import WasteWaterTreatmentProject from './components/Projects/Routes/WasteWaterTreatmentProject.jsx';
import TransportationProject from './components/Projects/Routes/TransportationProject.jsx';
import InfrastructurePlanningProject from './components/Projects/Routes/InfrastructurePlanningProject.jsx';
import DrinkingWaterProject from './components/Projects/Routes/DrinkingWaterProject.jsx';
import Projects from './components/Projects/Projects.jsx';
import Hero from './components/Hero.jsx';
import JobApplication from './components/Career/JobApplication.jsx';
import Testimonials from './components/Career/Testimonials.jsx';



function App() {
  return (
    <Router className="div1">
      <Navbar />
      <Routes>
      <Route path='/h' element={<Hero />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/empanelment' element={<Empanelment />} />
        <Route path='/#contactus' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/storm-water-drainage' element={<Stormwater />} />
        <Route path='/services/water-supply' element={<Watersupply />} />
        <Route path='/services/sewerage-system' element={<SewerageSystem />} />
        <Route path='/services/water-audit' element={<WaterAudit />} />
        <Route path='/services/waste-water-treatment' element={<WasteWaterTreatment />} />
        <Route path='/services/engineering-design-project-management-consultancy' element={<EngineeringDesignProjectManagementConsultancy />} />
        <Route path='/sector/infrastructure-planning' element={<InfrastructurePlanning />} />
        <Route path='/sector/waste-water-treatment' element={<WasteWaterTreatmentSector />} />
        <Route path='/sector/drinking-water' element={<DrinkingWater />} />
        <Route path='/sector/transportation' element={<Transportation />} />
        <Route path='/projects/waste-water-treatment' element={<WasteWaterTreatmentProject />} />
        <Route path='/projects/transportation' element={<TransportationProject />} />
        <Route path='/projects/infrastructure-planning' element={<InfrastructurePlanningProject />} />
        <Route path='/projects/drinking-water' element={<DrinkingWaterProject />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/clientele' element={<Clientele />} />
        <Route path='/career/job-application' element={<JobApplication />} />
        <Route path='/career/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

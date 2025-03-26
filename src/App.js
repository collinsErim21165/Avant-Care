import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Payment from './Components/Payment';
import ContactUs from './Components/ContactUs';
import Xray from './Components/Xray';
import UrgentCare from './Components/UrgentCare';
import OccupationalMedicine from './Components/OccupationalMedicine';
import WeightLoss from './Components/WeightLoss';
import Labs from './Components/Labs';
import Physicals from './Components/Physicals';


function App() {
  //  useEffect(() => {
  //     AOS.init({
  //       duration: 1000,  // Animation duration (in milliseconds)
  //       offset: 100,     // Offset from the original trigger point (in pixels)
  //    });
  //   }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  return (
    <div className="App">
      {/* <NavBar/> */}
       <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About-us' element={<AboutUs/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/Payment' element={<Payment/>}/>
              <Route path='/Contact-us' element={<ContactUs/>}/>
              <Route path='/X-ray' element={<Xray/>}/>
              <Route path='/Urgent-Care' element={<UrgentCare/>}/>
              <Route path='/Occupational-medcine' element={<OccupationalMedicine/>}/>
              <Route path='/Weight-loss' element={<WeightLoss/>}/>
              <Route path='/Labs' element={<Labs/>} />
              <Route path='/Physical' element={<Physicals/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;

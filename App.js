import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hello from './components/Hello';
import Bye from './components/Bye';
import WellnessCard from './components/wellness';
import Tracking from './components/Tracking';
import Navbar from './components/Navbar';
import Legal from './components/Legal';
import Home from './components/home';
import Loginp from './components/loginp';
import ScrollToTop from './components/ScrollToTop';
import Job1 from './components/Job1';
import Glober from './components/Glober';

import Ria from './components/Ria'

function App() {



  return (
    <>
    <BrowserRouter basename="/minithon">
      <RoutesWeb />
    </BrowserRouter>
    </>
  );
}


const RoutesWeb = () => {
  const location = useLocation(); // Get the current route

  // Check if the current path is '/log'
  const hideNavbar = location.pathname === "/"; 

  return (
    <>
      <ScrollToTop />
      {/* Render Navbar only if the route is not '/log' */}
      {!hideNavbar && <Navbar />}
      
      <Routes>
        <Route path="/wellness" element={<WellnessCard />} />
        <Route path="/job" element={<Job1 />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Ria" element={<Ria />} />
        <Route path="/" element={<Loginp />} />
        
      </Routes>
    </>
  );
};

export default App;
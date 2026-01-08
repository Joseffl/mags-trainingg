import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme } from './utils/Themes.js'; // Import only lightTheme if dark mode is not needed
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Services/index.js";
import Projects from "./components/Projects";
// import Courses from "./components/Courses"; // Ensure this is correctly imported
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import ServicesExpanded from './components/ServicesExpanded/index.js';
import ServiceDetail from "./components/ServiceDetails/index.js";
import Index from "./components/Experience";
import CoursePage from "./pages/CoursePage/index.jsx";
import Terms from "./components/Terms/index.js";
import Privacy from "./components/PrivacyPolicy/index.js";
import Refund from "./components/Refund/index.js";
import Testimonials from "./components/Testimonial/index.js";
import TrainingSchedule from "./components/Training Schedule/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

// require('dotenv').config();


function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <Wrapper>
                    <About />
                    <Experience />
                  </Wrapper>
                  <Wrapper>
                    <Testimonials />
                    <Contact />
                  </Wrapper>
                  
                </>
              } 
            />
            <Route 
              path="/training" 
              element={<Projects openModal={openModal} setOpenModal={setOpenModal} />} 
            />
            <Route 
              path="/training-schedule" 
              element={<TrainingSchedule openModal={openModal} setOpenModal={setOpenModal} />} 
            />
            
            <Route 
              path="/projects" 
              element={<Skills openModal={openModal} setOpenModal={setOpenModal} />} 
            />
            <Route path="/services" element={<Index openModal={openModal} setOpenModal={setOpenModal}/>} />
            <Route path="/services/:id" element={<ServiceDetail openModal={openModal} setOpenModal={setOpenModal}/>} />
            {/* <Route path="/" element={<ServicesPage />} /> */}
            <Route path="/courses/:slug" element={<CoursePage />} />
            <Route path="/T&C" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/testimonials" element={<Testimonials />} />

            <Route 
              path="/role/:id" 
              element={
                <ServicesExpanded 
                  openModal={openModal} 
                  setOpenModal={setOpenModal} 
                />
              } 
            />
          </Routes>
          <Footer />
          
          
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;



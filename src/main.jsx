import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
import Certificate from "./Certificate";
import Skills from "./Skills";
import Project from "./System";
import Hobbies from "./Hobbies";
import Journey from "./Journey";
import Experience from './Experience';
import "./css/FullStyle.css";
import Navbar from './Components/Navbar';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/certificates" element={<Certificate />} /> {/* Certificate page */}
        <Route path="/skills" element={<Skills />} /> {/* Skills page */}
        <Route path="/systems" element={<Project/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/journey" element={<Journey/> } />
        <Route path="/experience" element={<Experience/> } />
      </Routes>
    </Router>

  </StrictMode>,
)

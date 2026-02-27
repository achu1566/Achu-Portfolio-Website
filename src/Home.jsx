import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";


import "./css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO CONTENT */}
      <div className="context">
        <Navbar/>
        <div className="home-hero">
          <h1 className="home-title">ACHUTHAN T B</h1>

          <p className="home-subtitle">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Problem Solver",
                "Quick Learner",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </p>

          <div className="home-button">
            <button className="home-btn-resume">Download CV</button>

            <div className="home-social-icons">
              <a href="https://www.linkedin.com/in/achuthan-t-b-1522972a2" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="mailto:achuthan1566@gmail.com">
                <MdEmail />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://leetcode.com/u/achu1506/" target="_blank" rel="noreferrer">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="area">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
    </>
  );
};
export default Home;
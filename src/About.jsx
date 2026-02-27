import { FaBriefcase, FaCode, FaTools, FaProjectDiagram } from "react-icons/fa";
import "./css/About.css";
import Image from "./assets/king2.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">
      <Navbar />

      {/* BACKGROUND */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-tagline">
            Passionate Full Stack Developer crafting scalable & elegant
            solutions
          </p>

           <div className="about-stats-container">
      <div className="stats-card">
        <h1>1+</h1>
        <p>Internship Experience</p>
      </div>

      <div className="stats-card">
        <h1>3+</h1>
        <p>Projects Built</p>
      </div>

      <div className="stats-card">
        <h1>230+</h1>
        <p>DSA & Problems Solved</p>
      </div>

      <div className="stats-card">
        <h1>10+</h1>
        <p>Worked With Languages & Tools</p>
      </div>
    </div>


          <p className="about-description">
            I’m <span>Achu</span>, a <span>Full Stack Developer</span>{" "}
            passionate about building efficient, scalable, and user-focused web
            applications. I enjoy turning ideas into real-world products by
            combining clean UI design with reliable backend systems.
          </p>

          <p className="about-description">
            On the frontend, I create{" "}
            <span>responsive and intuitive user interfaces</span> using modern
            web technologies. On the backend, I focus on{" "}
            <span>API design, database management, and secure data flow</span>,
            ensuring performance and scalability across applications.
          </p>

          <p className="about-description">
            I have a strong interest in{" "}
            <span>problem solving, DSA, and system thinking</span>, and I
            actively work on improving code efficiency and structure. I value
            writing
            <span>clean, readable, and maintainable code</span> that supports
            long-term growth.
          </p>

          <p className="about-description">
            I learn best through <span>focused, hands-on projects</span> and
            continuously adapt to modern tools and best practices. My goal is to
            secure a role in a leading IT company and grow into a developer who
            delivers <span>quality, performance, and impact</span>.
          </p>

         
          <div className="about-buttons">
            <button
              onClick={() => navigate("/contact")}
              className="btn-primary"
            >
              Contact Me
            </button>
            <button
              onClick={() => navigate("/systems")}
              className="btn-outline"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <img src={Image} alt="Profile" className="about-image" />
          <div className="about-card">
            <h3>Quick Info</h3>

            <ul>
              <li>
                <strong>Name:</strong> Achuthan T B
              </li>
              <li>
                <strong>Role:</strong> Full Stack Developer
              </li>
              <li>
                <strong>Education:</strong> College Student
              </li>
              <li>
                <strong>Skills:</strong> MERN, Java, Python
              </li>
              <li>
                <strong>Interests:</strong> Problem Solving, System Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

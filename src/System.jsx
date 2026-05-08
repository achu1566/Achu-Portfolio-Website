import React from "react";
import Navbar from "./Components/Navbar";
import "./css/System.css";
import project1Image from "./assets/expensetracker.png";
import placementImg from "./assets/placement-project-image.png";
import aiCareerImg from "./assets/AI_Career_Path.jpeg";
import hospital from "./assets/hospital_1.webp";

const Project = () => {
  return (
    <>
      <div className="context-project">
        <Navbar />

        <div className="projects-wrapper">
            <h1 className="section-heading-projects">Projects</h1>
          {/* ===== PROJECT CARD ===== */}
          <div className="project-card">
            {/* LEFT SIDE */}
            <div className="project-left">
              <img
                src={project1Image}
                alt="Expense Tracker"
                className="project-image"
              />

              <div className="project-buttons">
                <button className="btn secondary">View Architecture</button>
                <button className="btn primary">Live Demo</button>
              </div>
            </div>

            <div className="project-right">
              <h2 className="project-title">Personal Income & Expense Tracker</h2>
                <h2 className="project-subtitle-inex"><span className="in-project-section">In</span><span className="ex-project-section">Ex</span> Tracker</h2>
              <div className="project-section">
                <h4>Problem</h4>
                <p>
                  Manual expense tracking is inefficient and error-prone, making
                  it difficult for users to understand their spending patterns.
                </p>
              </div>

              <div className="project-section">
                <h4>Solution</h4>
                <p>
                  A full-stack web application that allows users to track
                  income, expenses, and visualize financial data in real time.
                </p>
              </div>

              <div className="project-section">
                <h4>Tech Stack</h4>
                <p>React, Node.js, Express.js, MongoDB, Chart.js</p>
              </div>

              <div className="project-section">
                <h4>Impact</h4>
                <p>
                  Helped users gain better financial awareness and improved
                  expense management efficiency.
                </p>
              </div>
            </div>
          </div>
          


          <div className="project-card">
            <div className="project-left">
              <div className="image-wrapper">
                <img
                  src={placementImg}
                  alt="Placement Management System"
                  className="project-image"
                />
              </div>

              <div className="project-buttons">
                <button className="btn secondary">View Architecture</button>
                <button className="btn primary">Live Demo</button>
              </div>
            </div>

            <div className="project-right">
              <h2 className="project-title">
                Placement Management System
              </h2>

              <div className="project-section">
                <h4>Problem Statement</h4>
                <p>
                  Manual placement tracking leads to data inconsistency,
                  inefficient shortlisting, and lack of transparency for students.
                </p>
              </div>

              <div className="project-section">
                <h4>Solution</h4>
                <p>
                  A centralized web application that automates student data
                  management, company listings, round-wise shortlisting,
                  and real-time placement status tracking.
                </p>
              </div>

              <div className="project-section">
                <h4>Tech Stack</h4>
                <p>
                   React, Node.js, Express, MongoDB, XLSX
                </p>
              </div>

              <div className="project-section">
                <h4>Impact</h4>
                <p>
                  Reduced placement data handling time by 60% and improved
                  transparency for students and placement officers.
                </p>
              </div>
            </div>

          </div>



          {/* ===== PROJECT 3: AI Career Path Predictor ===== */}
          <div className="project-card">
            <div className="project-left">
              <div className="image-wrapper">
                <img
                  src={aiCareerImg}
                  alt="AI Powered Student Career Path Predictor"
                  className="project-image"
                />
              </div>

              <div className="project-buttons">
                <button
                  className="btn secondary"
                  onClick={() => window.open("https://github.com/achu1566/AI-Powered-StudentCareerPathPredictor", "_blank")}
                >
                  View Architecture
                </button>
                <button
                  className="btn primary"
                  onClick={() => window.open("https://orbit-edstudentcareerpathpredictor.vercel.app/", "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            <div className="project-right">
              <h2 className="project-title">
                AI Powered Student Career Path Predictor
              </h2>

              <div className="project-section">
                <h4>Problem Statement</h4>
                <p>
                  Many students face difficulty choosing the right career path
                  due to lack of personalized guidance, unclear understanding of
                  their strengths, and limited awareness of industry
                  opportunities.
                </p>
              </div>

              <div className="project-section">
                <h4>Solution</h4>
                <p>
                  Developed an AI-powered web application that analyzes student
                  skills, interests, and academic performance to recommend
                  suitable career paths and learning directions.
                </p>
              </div>

              <div className="project-section">
                <h4>Tech Stack</h4>
                <p>
                  React, Node.js, Express.js, MongoDB, Python, Machine Learning
                </p>
              </div>

              <div className="project-section">
                <h4>Impact</h4>
                <p>
                  Helped create a smarter career guidance platform that assists
                  students in making informed career decisions through AI-driven
                  recommendations and personalized insights.
                </p>
              </div>
            </div>
          </div>



          {/* ===== PROJECT 4: Hospital Management System (LLD) ===== */}
          <div className="project-card">
            <div className="project-left">
              <div className="image-wrapper">
                <img
                  src={hospital}
                  alt="AI Powered Student Career Path Predictor"
                  className="project-image"
                />
              </div>

              <div className="project-buttons">
                <button
                  className="btn secondary"
                  onClick={() => window.open("https://github.com/achu1566/HospitalManagementSystemLLD", "_blank")}
                >
                  View Architecture
                </button>
              </div>
            </div>

            <div className="project-right">
              <h2 className="project-title">
                Hospital Management System (LLD)
              </h2>

              <div className="project-section">
                <h4>Problem Statement</h4>
                <p>
                  Managing hospital operations manually can lead to inefficient
                  patient handling, appointment delays, poor record management,
                  and difficulty maintaining scalable healthcare workflows.
                </p>
              </div>

              <div className="project-section">
                <h4>Solution</h4>
                <p>
                  Built a Java-based Hospital Management System using Low Level
                  Design principles to manage patients, doctors, appointments,
                  and billing through a modular and scalable architecture.
                </p>
              </div>

              <div className="project-section">
                <h4>Tech Stack</h4>
                <p>Java, OOP, Low Level Design (LLD)</p>
              </div>

              <div className="project-section">
                <h4>Impact</h4>
                <p>
                  Improved understanding of scalable system architecture,
                  object-oriented design patterns, and real-world healthcare
                  workflow modeling while strengthening backend development and
                  problem-solving skills.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

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
    </>
  );
};

export default Project;

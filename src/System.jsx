import React from "react";
import Navbar from "./Components/Navbar";
import "./css/System.css";
import project1Image from "./assets/expensetracker.png";
import placementImg from "./assets/placement-project-image.png";
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

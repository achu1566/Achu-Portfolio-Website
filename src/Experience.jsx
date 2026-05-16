import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import PageLoader from './Components/PageLoader';
import usePageLoader from './hooks/usePageLoader';
import nsicLogo from './assets/nsiclogo2.png';
import vcetLogo from './assets/vcetlogo.png';
import collegeGradHat from './assets/college_graduation_hat.webp';
import './css/Experience.css';

const milestones = [
  {
    id: 1,
    label: "College Start",
    title: "Bachelor's Degree Journey",
    role: "Student",
    icon: <img src={collegeGradHat} alt="College Graduation Hat" className="milestone-custom-logo" style={{ backgroundColor: '#ffffff', borderRadius: '50%' }} />,
    description:  "Started my journey into programming and software development. Built strong fundamentals in problem solving, programming, and web technologies.",
    highlights: [
      "Learned programming fundamentals",
      "Built academic mini projects",
      "Explored full-stack development",
      "Developed problem solving skills",
    ],
  },{
  id: 2,
  label: "NSIC Internship",
  title: "NSIC Technical Internship",
  role: "AI & ML Intern – Python",
  icon: (
    <img
      src={nsicLogo}
      alt="NSIC Logo"
      className="milestone-custom-logo"
      style={{ backgroundColor: "#ffffff", borderRadius: "50%" }}
    />
  ),
  description:
    "Worked on an AI-based color prediction application using machine learning techniques and data preprocessing.",
  highlights: [
    "Built 'Color IQ' to predict exact color names from RGB values",
    "Processed and analyzed 100+ color dataset samples",
    "Applied feature engineering using Pandas and NumPy",
    "Trained Logistic Regression and Random Forest models",
    "Achieved 85% prediction accuracy",
    "Completed end-to-end model development within 15 days",
  ],
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning"
  ],
},
  {
    id: 3,
    label: "In-House Internship",
    title: "In-House Development Internship",
    role: "Full Stack Developer Intern",
    icon: <img src={vcetLogo} alt="VCET Logo" className="milestone-custom-logo" />,
    description:
      "Worked on a real placement management system project with a development team.",
    highlights: [
      "Built Excel to MongoDB student data import system",
      "Developed student login dashboard",
      "Implemented company recruitment workflow",
      "Created shortlist management system",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

const Experience = () => {
  const [activeNode, setActiveNode] = useState(milestones[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);
  const isLoading = usePageLoader();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const activeData = milestones.find((m) => m.id === activeNode);

  return (
    <div>
      <PageLoader isLoading={isLoading} />
      <Navbar />

      {/* Animated background — original, untouched */}
      <div className="area">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>

      {/* Timeline content overlaid on top */}
      <div className="experience-content-layer">
        <div className="experience-header">
          <h1 className="experience-title">Experience Journey</h1>
          <p className="experience-subtitle">My learning and professional journey</p>
        </div>

        <div
          ref={wrapperRef}
          className={`timeline-wrapper ${isVisible ? 'visible' : ''}`}
        >
          <div className="timeline-track">
            <div className="timeline-fill"></div>
          </div>

          <div className="timeline-nodes">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`timeline-node ${activeNode === milestone.id ? 'active' : ''}`}
                onClick={() => setActiveNode(milestone.id)}
                onMouseEnter={() => setActiveNode(milestone.id)}
              >
                <div className="node-circle">
                  {milestone.icon}
                </div>
                <div className="node-label">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-card-wrapper">
          {activeData && (
            <div className="experience-card" key={activeData.id}>
              <div className="card-header">
                <h2>{activeData.title}</h2>
                <span className="role-badge">{activeData.role}</span>
              </div>

              <p className="card-description">{activeData.description}</p>

              <div className="card-highlights">
                <h3>Highlights</h3>
                <ul>
                  {activeData.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {activeData.techStack && (
                <div className="card-tech-stack">
                  <h3>Tech Stack</h3>
                  <div className="tech-badges">
                    {activeData.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import PageLoader from "./Components/PageLoader";
import usePageLoader from "./hooks/usePageLoader";
import "./css/Skills.css";

const SkillCard = ({ label, percent, color }) => {
  const [fill, setFill] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate bar
    setTimeout(() => setFill(parseInt(percent)), 200);

    // Animate percentage
    let start = 0;
    const end = parseInt(percent);
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div className="skill-card">
      <div className="skill-header">
        <span>{label}</span>
        <span className="percent">{count}%</span>
      </div>

      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: `${fill}%`,
            background: color,
            boxShadow: `0 0 25px ${color}`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const isLoading = usePageLoader();
  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div>
        <Navbar />

      <section className="skills-section">
        <h2 className="section-title">Skills</h2>

        {/* Full Stack */}
        <div className="skill-category">
          <h3>Full Stack Development</h3>
          <div className="skill-grid">
            <SkillCard label="HTML" percent="75" color="#ff9f43" />
            <SkillCard label="CSS" percent="70" color="#48dbfb" />
            <SkillCard label="JavaScript" percent="72" color="#feca57" />
            <SkillCard label="React" percent="70" color="#54a0ff" />
            <SkillCard label="Node.js" percent="65" color="#1dd1a1" />
            <SkillCard label="MongoDB" percent="60" color="#10ac84" />
          </div>
        </div>

        {/* AI / ML */}
        <div className="skill-category">
          <h3>AI / Machine Learning</h3>
          <div className="skill-grid">
            <SkillCard label="Python" percent="75" color="#5f27cd" />
            <SkillCard label="ML Algorithms" percent="65" color="#341f97" />
            <SkillCard label="Data Analysis" percent="68" color="#0984e3" />
            <SkillCard label="NumPy / Pandas" percent="70" color="#6c5ce7" />
          </div>
        </div>

        {/* Problem Solving */}
        <div className="skill-category">
          <h3>Problem Solving</h3>
          <div className="skill-grid">
            <SkillCard label="DSA" percent="65" color="#ffffff" />
            <SkillCard label="Algorithms" percent="60" color="#636e72" />
            <SkillCard label="Logical Thinking" percent="75" color="#00b894" />
            <SkillCard label="Debugging" percent="70" color="#d63031" />
          </div>
        </div>
      </section>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
    </>
  );
};

export default Skills;

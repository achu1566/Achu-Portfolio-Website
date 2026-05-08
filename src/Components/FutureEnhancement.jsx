import React from "react";
import { IoClose } from "react-icons/io5";
import "../css/FutureEnhancements.css";

const FutureEnhancement = ({ onClose }) => {
  return (
    <div className="future-overlay">
      <div className="future-modal">

        {/* Close Button */}
        <button className="future-close" onClick={onClose}>
          <IoClose size={26} />
        </button>

        <h2 className="future-title">Future Enhancements</h2>
        <p className="future-subtitle">
          Planned ideas and features to continuously evolve this portfolio.
        </p>

        <div className="future-grid">
          <div className="future-card">
            <h4>Java LLD Mastery</h4>
            <p>Building scalable Low Level Design skills in Java by practicing object-oriented design patterns and real-world system architecture.</p>
            <span className="future-tag planned">Learning</span>
          </div>

          <div className="future-card">
            <h4>Daily LeetCode Challenge</h4>
            <p>Solving coding problems consistently to strengthen problem-solving, DSA concepts, and interview preparation skills.
</p>
            <span className="future-tag design">On going</span>
          </div>

          <div className="future-card">
            <h4>AI & Intelligent Systems</h4>
            <p>Exploring Artificial Intelligence, machine learning concepts, and modern AI tools to build smarter applications.</p>
            <span className="future-tag upcoming">Planned</span>
          </div>

          <div className="future-card">
            <h4>Professional English Communication</h4>
            <p>Improving fluency, confidence, and presentation skills for interviews, seminars, and professional conversations.</p>
            <span className="future-tag planned">On going</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FutureEnhancement;

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
            <h4>💬 Live Chat System</h4>
            <p>Real-time chat using WebSockets or Firebase.</p>
            <span className="future-tag planned">Planned</span>
          </div>

          <div className="future-card">
            <h4>📊 Admin Dashboard</h4>
            <p>Analytics dashboard to track portfolio engagement.</p>
            <span className="future-tag design">In Design</span>
          </div>

          <div className="future-card">
            <h4>🎨 Theme Switcher</h4>
            <p>Dark / Light / Neon themes with persistence.</p>
            <span className="future-tag upcoming">Upcoming</span>
          </div>

          <div className="future-card">
            <h4>📁 Case Studies</h4>
            <p>Detailed project architecture and decisions.</p>
            <span className="future-tag planned">Planned</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FutureEnhancement;

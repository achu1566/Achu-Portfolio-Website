import React from 'react'
import Navbar from './Components/Navbar';
import PageLoader from './Components/PageLoader';
import usePageLoader from './hooks/usePageLoader';
import "./css/Journey.css";
const Journey = () => {
  const isLoading = usePageLoader();
  return (
    <div>
        <PageLoader isLoading={isLoading} />
        <div>
          <Navbar />
          <section className="journey-section">
      <h2 className="journey-title">My Journey</h2>

      <div className="timeline">

        {/* 2023 */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>2023</h3>
            <h4>Programming Foundations</h4>
            <p>
              Learned <b>C & Java fundamentals</b> and built a strong
              <b> problem-solving mindset</b> through logic and DSA practice.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        {/* 2024 */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>2024</h3>
            <h4>Entered Full Stack Development</h4>
            <p>
              Started building real applications using
              <b> React, Node.js, MongoDB</b> and learned frontend + backend
              integration.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        {/* 2025 */}
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>2025</h3>
            <h4>Placement Management System</h4>
            <p>
              Designed and developed a <b>scalable placement system</b> with
              authentication, Excel uploads, and MongoDB architecture.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        {/* Present */}
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>Present</h3>
            <h4>Career Focus</h4>
            <p>
              Actively preparing for <b>product-based roles</b>, improving
              system design, DSA, and real-world problem solving.
            </p>
          </div>
          <span className="timeline-dot"></span>
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
    </div>
  )
}

export default Journey;
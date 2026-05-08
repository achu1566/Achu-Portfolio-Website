import React, { useState } from "react";
import "./css/Certificates.css";
import Navbar from "./Components/Navbar";

import cert1 from "./certificateAssets/interninhouse.png";
import cert2 from "./certificateAssets/internnsic.png";
import cert3 from "./certificateAssets/novifullstack.png";
import cert4 from "./certificateAssets/fullstackJava.png";
import cert5 from "./certificateAssets/pythonMarcello.png";
import cert6 from "./certificateAssets/sqlcongnitive.png";
import cert7 from "./certificateAssets/CyberSecurity_Certificate.jpg";
import cert8 from "./certificateAssets/Ethical_hacking_nptel.jpg";
import cert9 from "./certificateAssets/Fullstack_Reccsar.jpg";
import cert10 from "./certificateAssets/Js&css_Udemy_Certificate.jpg";
import cert11 from "./certificateAssets/React_Reccsar.jpg";

const certificateData = [
  {
    id: 1,
    title: "Full Stack Internship",
    org: "Inhouse Training Program",
    image: cert1,
    tag: "Featured",
    category: "Internship",
    skills: ["React", "Node.js", "MongoDB"],
    context: "Built core modules for my Placement Management System.",
  },
  {
    id: 2,
    title: "AIML Internship",
    org: "NSIC – Govt of India",
    image: cert2,
    tag: "Featured",
    category: "Internship",
    skills: ["Python for AIML", "Pandas", "Numpy"],
    context: "Developed ML models for predicting ",
  },
  {
    id: 3,
    title: "Full Stack Development",
    org: "NoviTech",
    image: cert3,
    tag: "Backend",
    category: "Full stack",
    skills: ["React JS", "HTML & CSS", "Node JS", "MongoDB"],
    context: "Implemented MongoDB collections for student & company data.",
  },{
    id: 4,
    title: "Java Full Stack",
    org: "Inhouse Training Program",
    image: cert4,
    tag: "Online Course",
    category: "Featured",
    skills: ["Java", "Fundamentals of Spring boot", "Fundamentals of Frontend"],
    context: "Built core modules for my Placement Management System.",
  },
  {
    id: 5,
    title: "Python Internship",
    org: "Marcello Tech",
    image: cert5,
    tag: "Internship",
    category: "Internship",
    skills: ["Python for AIML", "Pandas", "Numpy"],
    context: "Developed ML models for predicting ",
  },
  {
    id: 6,
    title: "SQL Basics",
    org: "Cognitive Class",
    image: cert6,
    tag: "Online Course",
    category: "Database",
    skills: ["CRUD", "Schema Design", "Indexes"],
    context: "Implemented MongoDB collections for student & company data.",
  },
  {
    id: 7,
    title: "Cybersecurity for Beginners",
    org: "Tata STRIVE & Microsoft",
    image: cert7,
    tag: "Online Course",
    category: "Cybersecurity",
    skills: ["Cybersecurity Fundamentals", "Network Security", "Threat Analysis"],
    context: "Completed a 40-hour course on cybersecurity fundamentals.",
  },
  {
    id: 8,
    title: "Ethical Hacking",
    org: "NPTEL – IIT Kharagpur",
    image: cert8,
    tag: "Featured",
    category: "Cybersecurity",
    skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment"],
    context: "Elite certification with 76% score in a 12-week NPTEL course.",
  },
  {
    id: 9,
    title: "Full Stack Web Development",
    org: "Reccsar Pvt. Ltd.",
    image: cert9,
    tag: "Workshop",
    category: "Full stack",
    skills: ["HTML & CSS", "JavaScript", "Full Stack Basics"],
    context: "Participated in a hands-on full stack web development workshop.",
  },
  {
    id: 10,
    title: "CSS & JavaScript Crash Course",
    org: "Udemy",
    image: cert10,
    tag: "Online Course",
    category: "Frontend",
    skills: ["CSS", "JavaScript", "Web Design"],
    context: "Completed a crash course on CSS and JavaScript fundamentals.",
  },
  {
    id: 11,
    title: "React JS Workshop",
    org: "Reccsar Pvt. Ltd.",
    image: cert11,
    tag: "Workshop",
    category: "Frontend",
    skills: ["React JS", "Components", "State Management"],
    context: "Participated in a React JS workshop covering core concepts.",
  },
];

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <div className="cert-section-wrapper">
        <Navbar />

      <section className="cert-section">
        <h2 className="cert-title">Achievements & Certifications</h2>

        <div className="cert-grid">
          {certificateData.map((cert) => (
            <div
              key={cert.id}
              className={`cert-card ${cert.tag === "Featured" ? "featured" : ""}`}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} />

                <div className="cert-overlay">
                  <button onClick={() => setActiveCert(cert)}>
                    View Certificate
                  </button>
                </div>

                <span className={`cert-badge ${cert.tag.toLowerCase()}`}>
                  {cert.tag}
                </span>
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>

                <ul className="cert-skills">
                  {cert.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeCert && (
          <div className="cert-modal">
            <div className="cert-modal-content">
              <span className="close-btn" onClick={() => setActiveCert(null)}>
                ✕
              </span>

              <div className="modal-body">
                <img src={activeCert.image} alt="Certificate Preview" />

                <div className="modal-info">
                  <h3>{activeCert.title}</h3>
                  <p className="modal-org">{activeCert.org}</p>

                  <p className="modal-context">
                    {activeCert.context}
                  </p>

                  <div className="modal-skills">
                    {activeCert.skills.map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default Certificates;

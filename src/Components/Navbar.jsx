import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FullStyle.css";
import { IoChatbubbleEllipses } from "react-icons/io5";
import FutureEnhancement from "./FutureEnhancement";
import futureBrain from "../assets/idea.png";
const Navbar = ({ futureCount = 4 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="nav-bar">
        <li className="nav-items" onClick={() => navigate("/")}>Home</li>
        <li className="nav-items" onClick={() => navigate("/about")}>About</li>
        <li className="nav-items" onClick={() => navigate("/systems")}>Systems</li>
        <li className="nav-items" onClick={() => navigate("/skills")}>Skills</li>
        <li className="nav-items" onClick={() => navigate("/journey")}>Journey</li>
        <li className="nav-items" onClick={() => navigate("/experience")}>Experience</li>
        <li className="nav-items" onClick={() => navigate("/certificates")}>Certificates</li>
        <li className="nav-items" onClick={() => navigate("/hobbies")}>Hobbies</li>
        <li className="nav-items" onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* Message Icon */}
      <div
        className="message-icon-wrapper"
        onClick={() => setOpen(true)}
      >
        <img src={futureBrain} alt="brain" style = {{width: "26px", height: "26px"}} />
        {/* <IoChatbubbleEllipses size={26} className="message-bar-notification" /> */}
        <span className="message-badge">{futureCount}</span>
      </div>

      {/* Modal */}
      {open && <FutureEnhancement onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;

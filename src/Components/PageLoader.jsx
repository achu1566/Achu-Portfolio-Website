import React, { useState, useEffect } from "react";
import logoSvg from "../assets/logo.svg";
import "../css/PageLoader.css";

const PageLoader = ({ isLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Start fade-out animation
      setFadeOut(true);
      // Remove from DOM after animation completes
      const timer = setTimeout(() => setHidden(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (hidden) return null;

  return (
    <div className={`page-loader ${fadeOut ? "page-loader--fade-out" : ""}`}>
      {/* Ambient glow behind logo */}
      <div className="loader-glow"></div>

      {/* Logo with pulse animation */}
      <div className="loader-logo-wrapper">
        <img src={logoSvg} alt="Loading..." className="loader-logo" />
      </div>

      {/* Animated loading bar below logo */}
      <div className="loader-bar-track">
        <div className="loader-bar-fill"></div>
      </div>

      {/* Loading text */}
      <p className="loader-text">
        <span className="loader-text-char" style={{ animationDelay: "0s" }}>L</span>
        <span className="loader-text-char" style={{ animationDelay: "0.05s" }}>o</span>
        <span className="loader-text-char" style={{ animationDelay: "0.1s" }}>a</span>
        <span className="loader-text-char" style={{ animationDelay: "0.15s" }}>d</span>
        <span className="loader-text-char" style={{ animationDelay: "0.2s" }}>i</span>
        <span className="loader-text-char" style={{ animationDelay: "0.25s" }}>n</span>
        <span className="loader-text-char" style={{ animationDelay: "0.3s" }}>g</span>
        <span className="loader-text-char" style={{ animationDelay: "0.4s" }}>.</span>
        <span className="loader-text-char" style={{ animationDelay: "0.5s" }}>.</span>
        <span className="loader-text-char" style={{ animationDelay: "0.6s" }}>.</span>
      </p>
    </div>
  );
};

export default PageLoader;

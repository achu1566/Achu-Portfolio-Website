import React from "react";
import "./css/Hobbies.css";
import chessImg from "./HobbiesImage/chess.png";
import typingImg from "./HobbiesImage/typing.png";
import drawingImg from "./HobbiesImage/drawingbrush.png";
import Navbar from "./Components/Navbar";

const Hobbies = () => {
  return (
    <>
    <div className="hobbies-container">
      <Navbar />
      <section className="hobbies-section">
      <h2 className="hobbies-title">Beyond Code</h2>
      <p className="hobbies-subtitle">
        Skills I actively practice outside software development
      </p>

      <div className="hobbies-grid">
        {/* CHESS */}
        <div className="hobby-card">
          <div className="hobby-left">
            <img src={chessImg} alt="Chess" />
          </div>

          <div className="hobby-right">
            <h3>Chess</h3>
            <span className="skill-tag">Strategic Thinking</span>
            <p>
              Competitive chess player focused on improving decision-making,
              pattern recognition, and pressure handling.
            </p>

            <ul className="overview-habbits">
              <li>Games : 300+</li>
              <li>Games won : 150+</li>
              <li>Puzzle solved : 200+</li>
              <li>Rating : 650+</li>
            </ul>

            <a
              href="https://www.chess.com/member/achu_1566"
              target="_blank"
              rel="noopener noreferrer"
              className="proof-link"
            >
              View Chess Profile →
            </a>
          </div>
        </div>

        {/* TYPING */}
        <div className="hobby-card">
          <div className="hobby-left">
            <img src={typingImg} alt="Typing" />
          </div>

          <div className="hobby-right">
            <h3>Type Racing</h3>
            <span className="skill-tag">Speed & Focus</span>
            <p>
              Regular practice on TypeRacer to maintain high typing speed with
              accuracy under time constraints.
            </p>

            <ul  className="overview-habbits">
              <li>Races : 1000+</li>
              <li>Races won : 300+</li>
              <li>Avg.Speed : 60+ WPM</li>
              <li>Rank : Type Master</li>
            </ul>

            <a
              href="https://data.typeracer.com/pit/profile?user=achuthan18"
              target="_blank"
              rel="noopener noreferrer"
              className="proof-link"
            >
              View TypeRacer Profile →
            </a>
          </div>
        </div>

        {/* DRAWING */}
        <div className="hobby-card">
          <div className="hobby-left">
            <img src={drawingImg} alt="Drawing" />
          </div>

          <div className="hobby-right">
            <h3>Digital Drawing</h3>
            <span className="skill-tag">Visual Creativity</span>
            <p>
              Creating original digital drawings to strengthen creativity,
              visual balance, and storytelling skills.
            </p>

            <a
              href="#"
              className="proof-link"
            >
              Drawing Website (Coming Soon) →
            </a>
          </div>
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

export default Hobbies;

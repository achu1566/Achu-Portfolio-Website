import "./css/contact.css";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import map from "./assets/map.png";
import email from "./assets/communication.png";
import phone from "./assets/mobile.png";
import Navbar from "./Components/Navbar";
import PageLoader from "./Components/PageLoader";
import usePageLoader from "./hooks/usePageLoader";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ito42z4",
      "template_bmb7659",
      e.target,
      "fMpUH-yCmpxahCyqq",
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.log(error.text);
      },
    );
};
const Contact = () => {
  const isLoading = usePageLoader();
  return (
    <section className="contact-section">
      <PageLoader isLoading={isLoading} />
      <Navbar />

      {/* BACKGROUND */}
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
      <div className="contact-wrapper">
        {/* LEFT CONTENT */}
        <div className="contact-left">
          <span className="contact-tag">CONTACT</span>
          <h1>
            Let's build <br />
            something <span>IMPACTFUL</span>
          </h1>
          <p>
            Have a project idea, internship opportunity, or just want to
            connect? I'm always open to discussing meaningful work.
          </p>

          <div className="contact-info">
            <div><img src={email} style = {{width: "20px", height: "20px", position : "relative" , top : "4px", padding:"0 5px 0 0"}} alt="email" /> achuthan1566@email.com</div>
            <div className="contact-line">
              {/* <FiPhone className="icon" /> */}
              <img src={phone} style = {{width: "20px", height: "20px"}} alt="phone" />
              <span>+91 9087679686</span>
            </div>
            <div><img src={map} style = {{width: "20px", height: "20px" , padding:"0 5px 0 0"}} alt="map" /> Madurai , Tamil Nadu , India</div>
          </div>
        </div>

        <div className="contact-card">
          <h2>Send me a message</h2>

          <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="senderemail"
              name="senderemail"
              placeholder="Email Address"
              required
            />

            <input type="text" name="title" placeholder="Subject" required />

            <textarea
              name="message"
              placeholder="Your message..."
              rows="4"
              className="contact-text-area"
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>


      <div className="other-links">
        
      </div>
    </section>
  );
};

export default Contact;

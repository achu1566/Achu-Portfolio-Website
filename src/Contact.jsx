import "./css/contact.css";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
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
  return (
    <section className="contact-section">
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
            Let’s build <br />
            something <span>IMPACTFUL</span>
          </h1>
          <p>
            Have a project idea, internship opportunity, or just want to
            connect? I’m always open to discussing meaningful work.
          </p>

          <div className="contact-info">
            <div>📧 achuthan1566@email.com</div>
            <div className="contact-line">
              <FiPhone className="icon" />
              <span>+91 9087679686</span>
            </div>
            <div>📍 Madurai , Tamil Nadu , India</div>
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

import { useState } from "react";
import "./styles/ContactPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import castel from "../assets/images/chateau_h-removebg-preview.png";
import brume from "../assets/images/Brume.png";
import brumeInverse from "../assets/images/BrumeInverse.png";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="contact-container">
        <div className="contact-content">
          <div className="castel">
            <img src={castel} alt="castel" />
            <div className="brume">
              <img src={brume} alt="brume" />
              <div className="brume reverse-brume">
                <img src={brumeInverse} alt="brumeinverse" />
              </div>
            </div>
          </div>

          <section className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

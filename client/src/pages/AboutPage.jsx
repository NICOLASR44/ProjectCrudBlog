import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/AboutPage.css";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <header>
          <h1>About Us</h1>
        </header>

        <section className="about-section">
          <p>
            Welcome to our website! We're passionate about web development, and
            our mission is to make it easy for you to manage your blog.
          </p>
          <p>
            Our team is made up of talented individuals who are dedicated to
            providing the best services/products to our customers. We believe in
            innovation, creativity and delivering exceptional value.
          </p>
          <p>
            Please feel free to visit our website to learn more about what we
            do. If you have any questions, please don't hesitate to contact us.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;

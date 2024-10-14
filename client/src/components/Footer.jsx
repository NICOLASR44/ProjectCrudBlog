import "./styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import des icônes

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="/" aria-label="Home">
            Home
          </a>
          <a href="/about" aria-label="About Us">
            About
          </a>
          <a href="/contact" aria-label="Contact Us">
            Contact
          </a>
        </div>

        <div className="footer__social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer bottom moved into footer content */}
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Nr Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

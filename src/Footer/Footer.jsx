import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <h3>Features</h3>
          <a>Link Editor</a>
          <a>Link Management</a>
          <a>Branded Links</a>
          <a>Short URL Tracking</a>
          <a>QR Code Generator</a>
          <a>Short URL API</a>
        </ul>
        <ul>
          <h3>Resources</h3>
          <a>Blog</a>
          <a>For Developers</a>
          <a>Our Proven Process</a>
          <a>About Us</a>
        </ul>
        <ul>
          <h3>Contact Us</h3>
          <a>Help Desk</a>
          <a>Contact Sales</a>
          <a>Contact Support</a>
          <a>Report Abuse</a>
        </ul>
        <ul>
          <h3>Legal</h3>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Cookie Policy</a>
          <a>Accessibility Statement</a>
          <a>Privacy Manager</a>
        </ul>
        <div className="text-right">
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <img src="/mainlogo.png" alt="Logo" />
            <p>2026 TinyURL LLC</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

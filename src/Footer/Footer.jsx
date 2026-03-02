import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-list">
          <ul>
            <p>Features</p>
            <a>Link Editor</a>
            <a>Link Management</a>
            <a>Branded Links</a>
            <a>Short URL Tracking</a>
            <a>QR Code Generator</a>
            <a>Short URL API</a>
          </ul>

          <ul>
            <p>Resources</p>
            <a>Blog</a>
            <a>For Developers</a>
            <a>Our Proven Process</a>
            <a>About Us</a>
          </ul>

          <ul>
            <p>Contact Us</p>
            <a>Help Desk</a>
            <a>Contact Sales</a>
            <a>Contact Support</a>
            <a>Report Abuse</a>
          </ul>

          <ul>
            <p>Legal</p>
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <a>Cookie Policy</a>
            <a>Accessibility Statement</a>
            <a>Privacy Manager</a>
          </ul>
        </div>
        <div className="footer-right-side">
          <div className="footer-icons">
            <FontAwesomeIcon
              className="ficon"
              icon={faFacebookF}
              style={{ color: "rgb(255, 255, 255)" }}
            />
            <FontAwesomeIcon
              className="ficon"
              icon={faInstagram}
              style={{ color: "rgb(255, 255, 255)" }}
            />
            <FontAwesomeIcon
              className="ficon"
              icon={faLinkedin}
              style={{ color: "rgb(255, 255, 255)" }}
            />
            <FontAwesomeIcon
              className="ficon"
              icon={faTwitter}
              style={{ color: "rgb(255, 255, 255)" }}
            />
            <img src="/mainlogo.png" alt="" />

            <p>© 2026 TinyURL LLC </p>
            <p> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

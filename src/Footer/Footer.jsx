import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
       
        <div className="text-right">
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <img src="/mainlogo.png" alt="Logo" />
            <p>2026 TinyURL </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

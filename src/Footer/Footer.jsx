import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="w-full h-[470px] bg-gradient-to-r from-[#0c6b87] to-[#012543] flex justify-around">
        <div className="flex justify-evenly h-[350px] w-[70%] pl-0">
          <ul className="mt-[65px]">
            <p className="text-white text-[20px] font-bold mb-[25px]">Features</p>
            <a className="text-white text-[16px] font-medium block p-[10px]">Link Editor</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Link Management</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Branded Links</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Short URL Tracking</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">QR Code Generator</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Short URL API</a>
          </ul>

          <ul className="mt-[65px]">
            <p className="text-white text-[20px] font-bold mb-[25px]">Resources</p>
            <a className="text-white text-[16px] font-medium block p-[10px]">Blog</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">For Developers</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Our Proven Process</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">About Us</a>
          </ul>

          <ul className="mt-[65px]">
            <p className="text-white text-[20px] font-bold mb-[25px]">Contact Us</p>
            <a className="text-white text-[16px] font-medium block p-[10px]">Help Desk</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Contact Sales</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Contact Support</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Report Abuse</a>
          </ul>

          <ul className="mt-[65px]">
            <p className="text-white text-[20px] font-bold mb-[25px]">Legal</p>
            <a className="text-white text-[16px] font-medium block p-[10px]">Terms of Service</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Privacy Policy</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Cookie Policy</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Accessibility Statement</a>
            <a className="text-white text-[16px] font-medium block p-[10px]">Privacy Manager</a>
          </ul>
        </div>

        <div className="text-right pr-10">
          <div>
            <FontAwesomeIcon
              className="p-1.5 text-white"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="p-1.5 text-white"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="p-1.5 text-white"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              className="p-1.5 text-white"
              icon={faTwitter}
            />
            <img className="h-[70px] w-[200px] pt-[10px]" src="/mainlogo.png" alt="" />

            <p className="text-white">2026 TinyURL LLC </p>
            <p className="text-white"> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

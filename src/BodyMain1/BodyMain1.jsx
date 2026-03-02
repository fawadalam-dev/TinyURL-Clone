import "./BodyMain1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHighlighter } from "@fortawesome/free-solid-svg-icons";

function BodyMain1() {
  return (
    <div className="body-part1">
      {/* Main Body Left Part */}
      <div className="body-p-left">
        <div className="bpl-heading">
          <h1>
            URL Shortener, Branded <br /> Short Links & Analytics
          </h1>
          <br />
        </div>

        <div className="bpl-paragraph">
          <p className="bpl-paragraph1">
            Welcome to the original link shortener — simplifying the Internet{" "}
            <br />
            through the power of the URL since 2002.
          </p>

          <p className="bpl-paragraph2">
            You can use branded domains for fully custom links, track link
            analytics, <br /> and enjoy other powerful features with our paid
            plans.
          </p>
        </div>

        <div className="bpl-btn">
          <button className="bpl-btn-plans">View Plans</button>
          <button className="bpl-btn-account">Create Free Account</button>
        </div>

        {/* Main Body Bottom Part */}
        <div className="main-body-bottom">
          <h2>Your Recent Links:</h2>

          <div className="recent-links-alert">
            <i className="fa-solid fa-circle-exclamation alert-icon"></i>
            No links yet in your history
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="body-p-right">
        <button className="bpr-shorten-btn">
          <i
            className="bpr-shorten-btn-icon fa-solid fa-link"
            style={{ color: "#000000" }}
          ></i>
          Shorten a Link
        </button>
        <button className="bpr-qr-btn">
          <i
            className="bpr-qr-btn-icon fa-solid fa-qrcode"
            style={{ color: "rgb(0, 0, 0)" }}
          ></i>
          Generate QR Code
        </button>

        {/* Rightside Box */}
        <div className="Rightside-box">
          <form
            className="body-p-right-form"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Input 1 */}
            <div className="bpr-form-input1">
              <label className="bpr-form-label" htmlFor="user-url">
                <i
                  className="bpr-form-label-icon fa-solid fa-location-arrow"
                  style={{ color: "rgb(0, 0, 0)" }}
                ></i>
                Long URL
              </label>
              <br />
              <input
                className="bpr-form-input"
                type="text"
                name="user-rule"
                id="user-url"
                placeholder="Paste your long URL here"
                required
              />
            </div>
            <br />
            <div className="bottom-input">
              <div className="bpr-form-p2">
                <label className="bpr-form-label" htmlFor="bpr-form-select1">
                  <FontAwesomeIcon
                    className="bpr-form-label-icon"
                    icon={faGlobe}
                    style={{ color: "rgb(0, 0, 0)" }}
                  />
                  Domain
                </label>
                <br />
                <select
                  className="bpr-form-select"
                  name="bpr-form-select1"
                  id="bpr-form-select1"
                >
                  <option value="tinyurl.com">tinyurl.com</option>
                  <option value="theahsan.com">theahsan.com</option>
                </select>
              </div>
              <div className="bpr-form-p2-input2">
                <label className="bpr-form-label" htmlFor="alias-url">
                  <FontAwesomeIcon
                    className="bpr-form-label-icon"
                    icon={faHighlighter}
                    style={{ color: "rgb(0, 0, 0)" }}
                  />
                  Alias (optional)
                </label>
                <br />
                <input
                  className="bpr-form-input2"
                  type="text"
                  name="alias-rule"
                  id="alias-url"
                  placeholder="Add alias here"
                  required
                />
                <br />
                <label className="bpr-form-4" htmlFor="alias-url">
                  Must be at least 5 characters
                </label>
              </div>
            </div>
          </form>
          <button type="submit" className="bpr-form-submit-btn">
            Shorten Link
          </button>
          <br />
          <p className="bpr-form-p-terms">
            By clicking Shorten Link, you agree with our Terms of Service,
            Privacy Policy, <br /> and Use of Cookies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyMain1;

import "./Bodypt3.css";

function Bodypt3() {
  return (
    <>
      <div className="body-part-3">
        <div className="body-part-3-left">
          <video width="640" height="480px" autoPlay loop muted>
            <source src="/bodypt3-v1.mp4" type="video/mp4" />
            Video +_+
          </video>
        </div>
        <div className="body-part-3-right">
          <h2>
            Link Shortening Done Quick <br /> and Easy
          </h2>
          <p>
            Our URL shortener is not only among the first-ever link <br />
            shorteners on the Internet — it's the best out there.
          </p>
          <p>
            Shorten links for social media, blogs, SMS, emails, ads, and <br />
            almost anything both off- and online.
          </p>
          <p>
            Wave goodbye to long, clunky links and give your audiences <br />
            the experiences they deserve!
          </p>

          <div className="body-part-3-right-buttons">
            <button className="body-part-3-right-plans" type="submit">
              View Plans
            </button>
            <button className="body-part-3-right-contact" type="submit">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bodypt3;

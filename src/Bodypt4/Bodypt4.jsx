import "./Bodypt4.css";

function Bodypt4() {
  return (
    <div className="bodypt4-container">
      <div className="bodypt4-inner">
        <div className="bodypt4-left">
          <div className="bodypt4-content">
            <h2>
              Transforming the Digital
              <br />
              Landscape Since '02
            </h2>
            <p>
              TinyURL has created billions of short links for marketers, <br />
              influencers, small business owners, and large businesses.
            </p>

            <div className="stats-container">
              <div className="stat-row">
                <span className="stat-value">Billions</span>
                <span className="stat-label">of redirects per month</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">24 years</span>
                <span className="stat-label">of shortening URLs</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">39,887,857,114</span>
                <span className="stat-label">TinyURLs created</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bodypt4-right">
          <video
            src="/bodypt4-v1.mp4"
            autoPlay
            loop
            muted
            type="video/mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Bodypt4;

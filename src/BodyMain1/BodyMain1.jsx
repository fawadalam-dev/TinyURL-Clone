import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHighlighter } from "@fortawesome/free-solid-svg-icons";

function BodyMain1() {
  const [longUrl, setLongUrl] = useState('');
  const [domain, setDomain] = useState('tinyurl.com');
  const [alias, setAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [recentLinks, setRecentLinks] = useState([]);

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('shortLinks') || '{}');
    const recents = JSON.parse(localStorage.getItem('recentLinks') || '[]');
    setRecentLinks(recents);
  }, []);

  const generateShortCode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;

    const code = alias || generateShortCode();
    const links = JSON.parse(localStorage.getItem('shortLinks') || '{}');
    links[code] = longUrl;
    localStorage.setItem('shortLinks', JSON.stringify(links));

    const newShortUrl = `http://localhost:5174/${code}`;
    setShortUrl(newShortUrl);

    const recents = JSON.parse(localStorage.getItem('recentLinks') || '[]');
    recents.unshift({ longUrl, shortUrl: newShortUrl, code });
    if (recents.length > 5) recents.pop();
    localStorage.setItem('recentLinks', JSON.stringify(recents));
    setRecentLinks(recents);

    setLongUrl('');
    setAlias('');
  };

  return (
    <div className="main-body">
      <div className="main-left">
        <h1>URL Shortener Simple & Fast</h1>
        <p>Shorten your long URLs easily.</p>
        <div className="buttons">
          <button className="btn-plans">View Plans</button>
          <button className="btn-account">Create Account</button>
        </div>
        <div className="recent-links">
          <h2>Recent Links:</h2>
          {recentLinks.length === 0 ? (
            <div className="no-links">No links yet</div>
          ) : (
            <ul>
              {recentLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">{link.shortUrl}</a> → {link.longUrl}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="main-right">
        <h3>Shorten a Link</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Long URL</label>
            <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Paste your long URL here"
              required
            />
          </div>
          <div className="flex-group">
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faGlobe} /> Domain
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                <option value="tinyurl.com">tinyurl.com</option>
                <option value="example.com">example.com</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faHighlighter} /> Alias (optional)
              </label>
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="Custom alias"
                minLength="5"
              />
            </div>
          </div>
          <button type="submit" className="btn-shorten">Shorten Link</button>
        </form>
        {shortUrl && (
          <div className="short-url">
            Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BodyMain1;

import { useEffect } from 'react';
import { useParams } from 'react-router';

function Redirect() {
  const { code } = useParams();

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('shortLinks') || '{}');
    const longUrl = links[code];
    if (longUrl) {
      window.location.href = longUrl;
    } else {
      // Handle not found
      alert('Short URL not found');
    }
  }, [code]);

  return <div>Redirecting...</div>;
}

export default Redirect;
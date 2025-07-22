import React from 'react';

const photos = [
  // Sample Unsplash images; replace with your GitHub raw URLs later
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
];

function downloadImage(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function App() {
  return (
    <div className="gallery-container">
      <h1>My Photo Gallery</h1>
      <div className="gallery-grid">
        {photos.map((url, idx) => (
          <div className="gallery-card" key={idx}>
            <img src={url} alt={`Photo ${idx + 1}`} className="gallery-img" />
            <button className="download-btn" onClick={() => downloadImage(url)}>
              Download
            </button>
          </div>
        ))}
      </div>
      <footer>
        <p>Replace sample images with your own by editing <code>src/App.jsx</code>.</p>
      </footer>
    </div>
  );
} 
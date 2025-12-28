import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container">
      {/* Floating Emojis */}
      <span className="emoji emoji-1">🔥</span>
      <span className="emoji emoji-2">💀</span>
      <span className="emoji emoji-3">⚡</span>
      <span className="emoji emoji-4">👑</span>

      {/* Logo */}
      <div className={`logo-container ${isLoaded ? "loaded" : ""}`}>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className={`content-container ${isLoaded ? "loaded" : ""}`}>
        <h1 className="title">
          What's Your
          <br />
          <span className="title-highlight">Korean Name?</span>
        </h1>
        <p className="description">
          Upload your photo and discover your unique Korean name based on your
          facial features.
        </p>

        <div className="stats-badge">
          <span className="stats-text">2.3M+ names generated</span>
        </div>
      </div>

      {/* Button */}
      <div className={`button-container ${isLoaded ? "loaded" : ""}`}>
        <a
          href="https://apps.apple.com/kr/app/nameko-korean-name-generator/id6755302680"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          DOWNLOAD APP
        </a>
      </div>
    </div>
  );
}

export default App;

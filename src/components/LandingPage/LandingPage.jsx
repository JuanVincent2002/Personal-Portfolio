import { useEffect, useState } from "react";
import "./LandingPage.css";
import myPhoto from "../../assets/Foto.png"

const menuItems = [
  { id: "profile", label: "MY PROFILE" },
  { id: "projects", label: "MY PROJECT" },
  { id: "work", label: "WORK EXPERIENCE" },
  { id: "org", label: "ORGANIZATIONAL EXPERIENCE" },
  { id: "cert", label: "CERTIFICATION" },
  { id: "contact", label: "CONTACT" },
];

export default function LandingPage({ onNavigate }) {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div className="landing-container">
      <div className="landing-bg-gradient" />
      <div className="landing-bg-glow" />
      <div className="landing-horizon" />

      <div className="landing-left">
        <div className={`landing-title ${visible ? 'visible' : ''}`}>
          <div className="landing-subtitle">PORTFOLIO — 2026</div>
          <div className="landing-name">
            JUAN VINCENT<br /><span className="landing-lastname">ELFONDA</span>
          </div>
          <div className="landing-divider" />
        </div>

        <nav className="landing-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className={`landing-nav-item ${visible ? 'visible' : ''}`}
            >
              <div className={`landing-nav-indicator ${hovered === item.id ? 'hovered' : ''}`} />
              <span className={`landing-nav-label ${hovered === item.id ? 'hovered' : ''}`}>
                {item.label}
              </span>
              {hovered === item.id && <span className="landing-nav-arrow">▶</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="landing-right">
        <div className="landing-portrait-wrapper">
          <div className="landing-portrait-glow" />
          <div className={`landing-portrait-frame ${visible ? 'visible' : ''}`}>
            <div className="landing-portrait-inner">
              <div className="landing-scan-line" />
              <div className="landing-corner landing-corner-tl" />
              <div className="landing-corner landing-corner-tr" />
              <div className="landing-corner landing-corner-bl" />
              <div className="landing-corner landing-corner-br" />
              <img 
                src={myPhoto}
                alt="Juan Vincent Elfonda"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`landing-bottom-info ${visible ? 'visible' : ''}`}>
        {["GIS ENTHUSIAST", "ENVIRONMENTAL ENGINEER", "HSSE STAFF"].map((t, i) => (
          <div key={i} className="landing-bottom-tag">{t}</div>
        ))}
      </div>
    </div>
  );
}
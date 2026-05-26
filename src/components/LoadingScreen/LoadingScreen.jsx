import { useEffect, useState } from "react";
import Particles from "../Particles/Particles";
import "./LoadingScreen.css";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING SYSTEM");
  const phases = ["INITIALIZING SYSTEM", "LOADING ASSETS", "CALIBRATING HUD", "ESTABLISHING LINK", "READY"];
  
  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(onDone, 600); }
      setProgress(Math.min(p, 100));
      setPhase(phases[Math.floor((p / 100) * (phases.length - 1))]);
    }, 60);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="loading-screen">
      <Particles />
      <div className="loading-content">
        <div className="loading-os-version">PORTFOLIO OS v2.0</div>
        <div className="loading-first-name">JUAN VINCENT</div>
        <div className="loading-last-name">ELFONDA</div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-info">
          <span>{phase}</span>
          <span>{Math.floor(progress)}%</span>
        </div>
        <div className="progress-bars">
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} className={`progress-bar-item ${progress > i*12.5 ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import "./ProjectDetailModal.css";

export default function ProjectDetailModal({ subProject, projectName, projectColor, onClose, onBackToProject }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fullscreen-overlay" onClick={toggleFullscreen}>
        <img src={subProject.image} alt={subProject.title} className="fullscreen-image" />
        <button className="fullscreen-close" onClick={toggleFullscreen}>✕</button>
      </div>
    );
  }

  return (
    <div className="detail-modal-overlay" onClick={onClose}>
      <div className="detail-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="detail-modal-header">
          <div className="detail-modal-header-left">
            <button onClick={onBackToProject} className="detail-back-btn">◀ BACK</button>
            <div className="detail-modal-title">{subProject.title}</div>
          </div>
          <button onClick={onClose} className="detail-modal-close">✕</button>
        </div>
        
        <div className="detail-modal-body">
          <div className="detail-image-container" onClick={toggleFullscreen}>
            <img src={subProject.image} alt={subProject.title} className="detail-image" />
            <div className="image-fullscreen-icon">🔍 Click to fullscreen</div>
          </div>
          
          <div className="detail-info">
            <div className="detail-project-name" style={{ color: projectColor }}>{projectName}</div>
            <div className="detail-description">{subProject.description}</div>
            
            {subProject.link && (
              <div className="detail-link-container">
                <a 
                  href={subProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="detail-link"
                  style={{ '--project-color': projectColor }}
                >
                  🌐 View Live WebGIS →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import "./ProjectDetailModal.css";

export default function ProjectDetailModal({ subProject, projectName, projectColor, onClose, onBackToProject }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliderFullscreen, setIsSliderFullscreen] = useState(false);

  // Pastikan images dalam bentuk array
  const images = subProject.images || (subProject.image ? [subProject.image] : []);
  const hasMultipleImages = images.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (e) => {
    e.stopPropagation();
    if (hasMultipleImages) {
      setIsSliderFullscreen(true);
    } else {
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsSliderFullscreen(false);
  };

  // Fullscreen untuk slider (multiple images)
  if (isSliderFullscreen) {
    return (
      <div className="fullscreen-overlay" onClick={closeFullscreen}>
        <div className="fullscreen-slider-container" onClick={(e) => e.stopPropagation()}>
          <button className="fullscreen-prev" onClick={prevImage}>◀</button>
          <img 
            src={images[currentImageIndex]} 
            alt={`${subProject.title} - ${currentImageIndex + 1}`} 
            className="fullscreen-image" 
          />
          <button className="fullscreen-next" onClick={nextImage}>▶</button>
          <div className="fullscreen-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
          <button className="fullscreen-close" onClick={closeFullscreen}>✕</button>
        </div>
      </div>
    );
  }

  // Fullscreen untuk single image
  if (isFullscreen) {
    return (
      <div className="fullscreen-overlay" onClick={closeFullscreen}>
        <img src={images[0]} alt={subProject.title} className="fullscreen-image" />
        <button className="fullscreen-close" onClick={closeFullscreen}>✕</button>
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
          <div className="detail-image-container">
            <img 
              src={images[currentImageIndex]} 
              alt={`${subProject.title} - ${currentImageIndex + 1}`} 
              className="detail-image" 
              onClick={openFullscreen}
            />
            
            {/* Tombol slider kiri/kanan */}
            {hasMultipleImages && (
              <>
                <button className="slider-prev" onClick={prevImage}>◀</button>
                <button className="slider-next" onClick={nextImage}>▶</button>
                <div className="image-counter">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
            
            <div className="image-fullscreen-icon" onClick={openFullscreen}>
              🔍 Click to fullscreen
            </div>
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
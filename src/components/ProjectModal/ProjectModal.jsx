import { useState } from "react";
import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  if (selectedSubProject) {
    return (
      <ProjectDetailModal
        subProject={selectedSubProject}
        projectName={project.name}
        projectColor={project.color}
        onClose={() => setSelectedSubProject(null)}
        onBackToProject={() => setSelectedSubProject(null)}
      />
    );
  }

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <div className="project-modal-header-left">
            <div className="project-modal-icon">
              <img src={project.icon} alt={project.name} className="project-modal-icon-img" />
            </div>
            <div className="project-modal-title">{project.name}</div>
          </div>
          <button onClick={onClose} className="project-modal-close">✕</button>
        </div>
        
        <div className="project-modal-body">
          <div className="sub-projects-list">
            {project.subProjects.map((sub, index) => (
              <div
                key={sub.id}
                className="sub-project-item"
                onClick={() => setSelectedSubProject(sub)}
                style={{ '--project-color': project.color }}
              >
                <div className="sub-project-number">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="sub-project-info">
                  <div className="sub-project-title">{sub.title}</div>
                  <div className="sub-project-preview">Click to view details →</div>
                </div>
                <div className="sub-project-arrow">▶</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
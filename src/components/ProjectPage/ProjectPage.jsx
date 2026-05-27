import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectModal from "../ProjectModal/ProjectModal";
import { projectsData } from "../../data/projectData";
import "./ProjectPage.css";

export default function ProjectPage({ onBack }) {
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageWrapper onBack={onBack}>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <SectionTitle label="MY PROJECT" sub="SYSTEM — PROJECT ARCHIVE" />
      
      <div className="project-container">
        <div className="project-header">
          <span className="project-header-icon">📁</span>
          <span className="project-header-text">JUAN VINCENT ELFONDA — PROJECT VAULT</span>
        </div>
        
        <div className="project-grid">
          {projectsData.map((p) => (
            <button
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedProject(p)}
              className={`project-card ${hovered === p.id ? "hovered" : ""}`}
            >
              {hovered === p.id && (
                <div
                  className="project-glow"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${p.color}15, transparent 70%)` }}
                />
              )}
              
              <div className="project-icon">
                <img
                  src={p.icon}
                  alt={p.name}
                  className="project-icon-img"
                />
              </div>
              
              <div className="project-name">{p.name}</div>
              <div className="project-open">
                <span>⋯</span> <span>OPEN FOLDER</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
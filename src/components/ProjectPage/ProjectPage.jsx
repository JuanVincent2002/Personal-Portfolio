import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectPage.css";

// Import semua gambar dari folder assets
import arcgisIcon from "../../assets/logo_arcgis.png";
import autocadIcon from "../../assets/logo_autocad.png";
import landcoverIcon from "../../assets/logo_landcover.png";   // ← Tambahkan ini
import qgisIcon from "../../assets/logo_qgis.png";
import webgisIcon from "../../assets/logo_webgis.png";

const projects = [
  { 
    id: "arcgis", 
    name: "ArcGIS Project", 
    icon: arcgisIcon, 
    color: "#1a6eff", 
    tags: ["ArcGIS", "Spatial Analysis", "Cartography"], 
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Comprehensive geospatial analysis using ArcGIS Pro for land use mapping, spatial data processing, and cartographic production for urban planning purposes." 
  },
  { 
    id: "autocad", 
    name: "AutoCAD Project", 
    icon: autocadIcon, 
    color: "#ff6b1a", 
    tags: ["AutoCAD", "Technical Drawing", "Civil"], 
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Technical drafting and design projects utilizing AutoCAD for topographic mapping, boundary surveys, and infrastructure layout plans." 
  },
  { 
    id: "landcover", 
    name: "Land Cover Analysis", 
    icon: landcoverIcon,     // ← Sekarang sudah terdefinisi
    color: "#1aff8a", 
    tags: ["Remote Sensing", "NDVI", "Classification"], 
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Satellite imagery analysis and classification of land cover types using supervised and unsupervised classification methods for environmental monitoring." 
  },
  { 
    id: "qgis", 
    name: "QGIS Project", 
    icon: qgisIcon, 
    color: "#9b1aff", 
    tags: ["QGIS", "Open Source GIS", "Geoprocessing"], 
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Open-source GIS projects involving spatial analysis, thematic mapping, and data integration from multiple geospatial data sources." 
  },
  { 
    id: "webgis", 
    name: "WebGIS", 
    icon: webgisIcon, 
    color: "#1affea", 
    tags: ["Leaflet.js", "Web Mapping", "GeoServer"], 
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Interactive web-based GIS applications for spatial data visualization, featuring dynamic map rendering and real-time data integration via REST APIs." 
  },
];

export default function ProjectPage({ onBack }) {
  const [hovered, setHovered] = useState(null);
  const [modal, setModal] = useState(null);

  return (
    <PageWrapper onBack={onBack}>
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      
      <SectionTitle label="MY PROJECT" sub="SYSTEM — PROJECT ARCHIVE" />
      
      <div className="project-container">
        <div className="project-header">
          <span className="project-header-icon">📁</span>
          <span className="project-header-text">JUAN VINCENT ELFONDA — PROJECT VAULT</span>
        </div>
        
        <div className="project-grid">
          {projects.map((p) => (
            <button
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setModal(p)}
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
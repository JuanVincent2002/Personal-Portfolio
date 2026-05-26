import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./CertPage.css";

import ohsIcon from "../../assets/sertifikat_K3_muda.jpg";
import qhseIcon from "../../assets/sertif_qhse.jpg";
import webgisIcon from "../../assets/sertif_webgis.jpg";
import mendeleyIcon from "../../assets/sertif_mendeley.jpg";

const certs = [
  { 
    title: "Certified Junior Occupational Health and Safety (OHS) Professional", 
    org: "LSP UPN Veteran Jawa Timur", 
    year: "2024", 
    color: "#1a6eff",
    icon: ohsIcon,
    link: "https://drive.google.com/file/d/1COzSH5L3IgX7AqcqeRSk8yk1d1Mi7sCg/view?usp=drive_link"
  },
  { 
    title: "Certified QHSE (Quality, Health, Safety, Environment) Professional – ISO 45001:2018", 
    org: "PT. Nata Envinusa Supervisi", 
    year: "2024", 
    color: "#ff6b1a",
    icon: qhseIcon,
    link: "https://drive.google.com/file/d/1TanfvPiA2ACMM99L2BGaT-Z27JNBmlXo/view?usp=drive_link"
  },
  { 
    title: "WEBGIS Training", 
    org: "Hi Spatial Academy", 
    year: "2025", 
    color: "#9b1aff",
    icon: webgisIcon,
    link: "https://drive.google.com/file/d/1pvAzEr2-77WP9IVttAv--36Isz26S01t/view?usp=sharing" 
  },
  { 
    title: "Mendeley Reference Management Software Training", 
    org: "HIMA-TL UPNVJT", 
    year: "2021", 
    color: "#1affea",
    icon: mendeleyIcon,
    link: "https://drive.google.com/file/d/1pvAzEr2-77WP9IVttAv--36Isz26S01t/view?usp=sharing"
  },
];

export default function CertPage({ onBack }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <PageWrapper onBack={onBack}>
      <SectionTitle label="TRAINING & CERTIFICATION" sub="SYSTEM — CREDENTIALS DATABASE" />
      <div className="cert-container">
        {certs.map((c, i) => (
          <div 
            key={i} 
            className={`cert-card ${hoveredIndex === i ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)} 
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(c.link)}
            style={{ cursor: "pointer" }}
          >
            <div className="cert-color-bar" style={{ background: c.color }} />
            <div className="cert-preview">
              <img src={c.icon} alt={c.title} />
            </div>
            <div className="cert-info">
              <div className="cert-title">{c.title}</div>
              <div className="cert-org">{c.org}</div>
            </div>
            <div className="cert-year" style={{ color: c.color }}>{c.year}</div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
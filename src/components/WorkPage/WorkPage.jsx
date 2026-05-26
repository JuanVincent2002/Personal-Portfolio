import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import Timeline from "../Timeline/Timeline";

export default function WorkPage({ onBack }) {
  const items = [
    { 
      year: "March 2026 – Present", 
      title: "HSSE STAFF", 
      company: "PT. Prima Citra Nutrindo", 
      desc: [
        "Conducted Management Walk-Through (MWT) inspections to ensure workplace safety, health, and environmental compliance.",
        "Documented all findings during inspections and reported them to the relevant responsible persons for timely corrective actions.",
        "Compiled reports consisting of documentation and recommendations to be presented during board of directors' meetings."
      ]
    },
    { 
      year: "February 2026 – March 2026", 
      title: "PROJECT ASSISTANT", 
      company: "UPN Veteran Jawa Timur", 
      desc: [
        "Assisted in creating administrative boundary maps for proposed landfill (TPA) and integrated waste processing facility (TPST) sites.",
        "Developed site plotting plans for proposed TPA/TPST locations, including spatial allocation and zoning layouts.",
      ]
    },
    { 
      year: "February 2024 – June 2024", 
      title: "INTERNSHIP", 
      company: "DLH Provinsi Jawa Timur", 
      desc: [
        "Assisted in creating land cover classification maps using Google Earth Engine and ArcGIS.",
        "Supported land quality index (LQI) calculations for environmental assessment and land suitability analysis.",
        "Prepared meeting minutes and documentation during internal and client meetings."
      ]
    },
    { 
      year: "August 2023 – December 2023", 
      title: "LAB ASSISTANT", 
      company: "UPN Veteran Jawa Timur", 
      desc: [
        "Mentored 24 students in topographic mapping and field data collection, achieving an average score of >78/100",
        "Reduced assignment errors by 25% through targeted feedback in 24+ consultations.",
        "Streamline grading efficiency by developing a standardized field assessment rubric, saving 2 hours/week."
      ]
    },
  ];
  
  return (
    <PageWrapper onBack={onBack}>
      <SectionTitle label="WORK EXPERIENCE" sub="SYSTEM — CAREER HISTORY" />
      <Timeline items={items.map(i => ({
        year: i.year, 
        title: i.title, 
        desc: `${i.company}\n\n${i.desc.map(point => `• ${point}`).join('\n')}`
      }))} />
    </PageWrapper>
  );
}
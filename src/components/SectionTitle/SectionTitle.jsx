import "./SectionTitle.css";

export default function SectionTitle({ label, sub }) {
  return (
    <div className="section-title">
      <div className="section-subtitle">{sub}</div>
      <div className="section-label">{label}</div>
      <div className="section-divider" />
    </div>
  );
}
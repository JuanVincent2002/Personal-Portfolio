import "./HUDCorner.css";

export default function HUDCorner({ pos }) {
  return <div className={`hud-corner hud-corner-${pos}`} />;
}
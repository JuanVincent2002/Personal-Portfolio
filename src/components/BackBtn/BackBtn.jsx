import { useState } from "react";
import "./BackBtn.css";

export default function BackBtn({ onClick }) {
  const [h, setH] = useState(false);
  return (
    <button 
      onClick={onClick} 
      onMouseEnter={() => setH(true)} 
      onMouseLeave={() => setH(false)}
      className={`back-btn ${h ? 'hovered' : ''}`}
    >
      <span className="back-btn-arrow">◀</span>
      <span className="back-btn-text">MAIN MENU</span>
    </button>
  );
}
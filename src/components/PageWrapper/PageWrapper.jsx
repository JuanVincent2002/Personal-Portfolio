import { useEffect, useState } from "react";
import BackBtn from "../BackBtn/BackBtn";
import "./PageWrapper.css";

export default function PageWrapper({ children, onBack }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 50); }, []);
  return (
    <div className={`page-wrapper ${vis ? 'visible' : ''}`}>
      <div className="page-wrapper-bg" />
      <BackBtn onClick={onBack} />
      <div className="page-wrapper-content">{children}</div>
    </div>
  );
}
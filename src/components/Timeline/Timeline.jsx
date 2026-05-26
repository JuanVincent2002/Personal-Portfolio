import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export default function Timeline({ items }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Fungsi untuk render desc yang mungkin berisi poin-poin
  const renderDesc = (desc) => {
    if (desc.includes('\n')) {
      const lines = desc.split('\n');
      return lines.map((line, idx) => {
        if (line.startsWith('•')) {
          return <li key={idx} className="timeline-point">{line}</li>;
        }
        if (line === '') return <br key={idx} />;
        return <p key={idx} className="timeline-company">{line}</p>;
      });
    }
    return <p className="timeline-company">{desc}</p>;
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          data-index={i}
          className={`timeline-item ${i % 2 === 0 ? 'even' : 'odd'} ${
            visibleItems.includes(i.toString()) ? 'visible' : ''
          }`}
        >
          <div className="timeline-content-wrapper">
            <div className="timeline-card">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-desc">
                {renderDesc(item.desc)}
              </div>
            </div>
          </div>
          <div className="timeline-node">
            <div className="timeline-node-inner" />
          </div>
          <div className="timeline-spacer" />
        </div>
      ))}
    </div>
  );
}
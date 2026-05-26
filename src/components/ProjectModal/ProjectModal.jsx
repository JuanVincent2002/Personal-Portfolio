import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const imgs = ["https://picsum.photos/seed/"+project.id+"1/400/250","https://picsum.photos/seed/"+project.id+"2/400/250","https://picsum.photos/seed/"+project.id+"3/400/250"];
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-title">{project.name}</div>
            <div className="modal-tags">
              {project.tags.map(t => <span key={t} className="modal-tag">{t}</span>)}
            </div>
          </div>
          <button onClick={onClose} className="modal-close">✕</button>
        </div>
        <div className="modal-body">
          <div className="modal-images">
            {imgs.map((src,i) => <img key={i} src={src} alt="" className="modal-image" />)}
          </div>
          <p className="modal-description">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}
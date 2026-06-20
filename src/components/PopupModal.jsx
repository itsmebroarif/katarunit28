export default function PopupModal({ data, lang, onClose }) {
  if (!data) return null;

  const members = data.members || [];
  const title = data.title?.[lang] || 'DIVISION';

  return (
    <div className="popup-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>&times;</button>
        <h3 className="popup-title">{title}</h3>
        {members.map((m, i) => {
          const ini = m.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
          return (
            <div key={i} className="m-row">
              <div className="m-icon">{ini}</div>
              <div>
                <span className="m-name">{m.name}</span>
                <div className="m-role"><i className="fas fa-caret-right"></i> {m.role?.[lang] || ''}</div>
              </div>
            </div>
          );
        })}
        <button className="popup-btn" onClick={onClose}>TUTUP</button>
      </div>
    </div>
  );
}

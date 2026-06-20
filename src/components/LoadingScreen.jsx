import { useState, useEffect } from 'react';

export default function LoadingScreen({ onDone }) {
  const TOTAL = 80;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= TOTAL) {
          clearInterval(interval);
          setTimeout(onDone, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="boot-screen">
      <div className="boot-cloud c1" />
      <div className="boot-cloud c2" />
      <div className="boot-cloud c3" />
      <div className="boot-cloud c4" />
      <div className="boot-cloud c5" />

      <div className="boot-content">
        <div className="boot-logo-wrap" style={{position:'relative'}}>
          <span className="star-deco" style={{top:'-10px',right:'-10px',fontSize:'1rem'}}>✦</span>
          <span className="star-deco" style={{bottom:'-6px',left:'-12px',fontSize:'0.8rem'}}>✦</span>
          <span className="star-deco" style={{top:'-4px',left:'-14px',fontSize:'0.6rem'}}>✦</span>
          <span className="star-deco" style={{bottom:'-8px',right:'-8px',fontSize:'0.7rem'}}>✦</span>
          <img src="/logo-karang-taruna.png" alt="Logo" className="boot-logo" />
        </div>
        <div className="boot-title">
          KARANG TARUNA<br />
          <span className="boot-sub">28</span> <span className="boot-sub2">BOJONG LIO</span>
        </div>
        <div className="boot-bar-wrap">
          <div className="boot-bar-track">
            <div className="boot-bar-fill" style={{ width: `${(progress / TOTAL) * 100}%` }} />
            <div className="boot-bar-glow" style={{ width: `${(progress / TOTAL) * 100}%` }} />
          </div>
          <div className="boot-bar-text">
            {progress < TOTAL ? 'Starting KATAR 28...' : 'Ready'}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seekUpdate, setSeekUpdate] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onMeta = () => setDuration(audio.duration);
    const onTime = () => { if (seekUpdate) setCurrent(audio.currentTime); };
    const onEnd = () => { audio.currentTime = 0; audio.play(); };

    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    audio.volume = 0.5;

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
    };
  }, [seekUpdate]);

  const fmt = (t) => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); }
    else { a.pause(); setPlaying(false); }
  };

  const seek = (val) => {
    setSeekUpdate(false);
    audioRef.current.currentTime = +val;
    setCurrent(+val);
    setSeekUpdate(true);
  };

  const vol = (val) => { if (audioRef.current) audioRef.current.volume = val / 100; };

  const openPopup = () => {
    const pct = duration ? (current / duration) * 100 : 0;
    const html = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;font-family:'VT323',monospace;color:#E8E0F0;padding:8px 0">
        <div style="width:100px;height:100px;border-radius:50%;overflow:hidden;border:3px solid #DC2626;background:#14141C;display:flex;align-items:center;justify-content:center">
          <img src="/logo-karang-taruna.png" style="width:80%;height:80%;object-fit:contain" />
        </div>
        <div style="text-align:center">
          <div style="font-family:'Press Start 2P',cursive;font-size:0.6rem;margin-bottom:4px">KATAR 28</div>
          <div style="font-size:0.9rem;color:#9890A8">OST Kafeinarts</div>
        </div>
        <div style="width:100%;display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-family:'Press Start 2P',cursive;font-size:0.3rem;color:#9890A8;min-width:32px;text-align:right" id="swal-cur">0:00</span>
            <div style="flex:1;height:6px;background:#2A2A3E;border-radius:3px;position:relative;cursor:pointer" id="swal-track">
              <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#FCD34D,#DC2626);border-radius:3px;transition:width 0.15s ease" id="swal-fill"></div>
            </div>
            <span style="font-family:'Press Start 2P',cursive;font-size:0.3rem;color:#9890A8;min-width:32px" id="swal-dur">0:00</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;justify-content:center">
            <button id="swal-play" style="width:48px;height:48px;border-radius:50%;border:2px solid #DC2626;background:linear-gradient(135deg,#DC2626,#F59E0B);color:white;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">
              <i class="fas fa-${playing ? 'pause' : 'play'}"></i>
            </button>
          </div>
          <div style="display:flex;align-items:center;gap:6px;justify-content:center">
            <span style="font-family:'Press Start 2P',cursive;font-size:0.3rem;color:#9890A8">VOL</span>
            <input type="range" min="0" max="100" value="${Math.round((audioRef.current?.volume || 0.5) * 100)}" style="width:120px;height:4px;accent-color:#F59E0B;cursor:pointer" id="swal-vol" />
          </div>
        </div>
      </div>
    `;

    window.Swal.fire({
      html,
      showConfirmButton: false,
      background: '#14141C',
      color: '#E8E0F0',
      customClass: { popup: 'audio-popup' },
      didOpen: () => {
        const swalPlay = document.getElementById('swal-play');
        const swalVol = document.getElementById('swal-vol');
        const swalCur = document.getElementById('swal-cur');
        const swalDur = document.getElementById('swal-dur');
        const swalFill = document.getElementById('swal-fill');
        const swalTrack = document.getElementById('swal-track');

        swalDur.textContent = fmt(duration);

        const updateUI = () => {
          const c = audioRef.current?.currentTime || 0;
          const d = audioRef.current?.duration || 0;
          swalCur.textContent = fmt(c);
          if (d) swalFill.style.width = (c / d) * 100 + '%';
          swalPlay.innerHTML = `<i class="fas fa-${audioRef.current?.paused ? 'play' : 'pause'}"></i>`;
        };

        const interval = setInterval(updateUI, 300);

        swalPlay.onclick = () => { toggle(); updateUI(); };

        swalVol.oninput = (e) => { vol(e.target.value); };

        swalTrack.onclick = (e) => {
          const rect = swalTrack.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          const d = audioRef.current?.duration || 0;
          seek(pct * d);
          updateUI();
        };

        window._swalInterval = interval;
      },
      willClose: () => {
        clearInterval(window._swalInterval);
      }
    });
  };

  return (
    <>
      <audio ref={audioRef} id="bgm" loop preload="auto">
        <source src="/ost.mp3" type="audio/mpeg" />
      </audio>

      <div className="audio-widget" onClick={openPopup}>
        <div className="aw-cover">
          <img src="/logo-karang-taruna.png" alt="KATAR" />
        </div>
        <div className="aw-info">
          <div className="aw-title">KATAR 28</div>
          <div className="aw-artist">OST Kafeinarts</div>
        </div>
        <button onClick={(e) => { e.stopPropagation(); toggle(); }} className="aw-play">
          <i className={`fas fa-${playing ? 'pause' : 'play'}`} />
        </button>
        <div className="aw-wave">
          <div className="aw-bar" style={{animationPlayState: playing ? 'running' : 'paused'}} />
          <div className="aw-bar" style={{animationDelay:'0.1s',animationPlayState: playing ? 'running' : 'paused'}} />
          <div className="aw-bar" style={{animationDelay:'0.2s',animationPlayState: playing ? 'running' : 'paused'}} />
          <div className="aw-bar" style={{animationDelay:'0.15s',animationPlayState: playing ? 'running' : 'paused'}} />
          <div className="aw-bar" style={{animationDelay:'0.05s',animationPlayState: playing ? 'running' : 'paused'}} />
        </div>
      </div>
    </>
  );
}

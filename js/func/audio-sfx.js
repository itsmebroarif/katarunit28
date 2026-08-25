/* audio-sfx.js - Efek suara (SFX) via Web Audio API */

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function initAudio() {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

/* Slide sound for Navbar (Rising Arpeggio feel) */
function playSlideSound() {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

/* Click sound for buttons (Short blip) */
function playClickSound() {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(500, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
}

/* Tick sound for scrolling (Very short and subtle) */
function playTickSound() {
    if (audioCtx.state === 'suspended') return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
}

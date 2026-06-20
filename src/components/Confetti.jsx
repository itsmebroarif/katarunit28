import { useEffect, useRef } from 'react';

const COLORS = ['#E83A4B','#4B8BEC','#8B5CF6','#F59E0B','#FCD34D','#EC4899','#34D399','#DC2626'];

export default function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pieces = [];
    const COUNT = 40;

    class Piece {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * -H * 0.5;
        this.w = Math.random() * 6 + 3;
        this.h = Math.random() * 4 + 2;
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.vy = Math.random() * 0.6 + 0.2;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.r = Math.random() * 360;
        this.rs = (Math.random() - 0.5) * 3;
        this.o = Math.random() * 0.3 + 0.15;
      }
      update() {
        this.vy += 0.04;
        if (this.vy > 2) this.vy = 2;
        this.x += this.vx;
        this.y += this.vy;
        this.r += this.rs;
        if (this.y > H + 10) { this.reset(); this.y = -10; }
        if (this.x < -10) this.x = W + 10;
        if (this.x > W + 10) this.x = -10;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.r * Math.PI) / 180);
        ctx.globalAlpha = this.o;
        ctx.fillStyle = this.c;
        ctx.shadowColor = this.c;
        ctx.shadowBlur = 2;
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
      }
    }

    for (let i = 0; i < COUNT; i++) {
      const p = new Piece();
      p.y = Math.random() * H;
      pieces.push(p);
    }

    let running = true;
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      pieces.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="confettiCanvas" />;
}

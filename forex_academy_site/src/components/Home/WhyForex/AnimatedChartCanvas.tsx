// Eugene Afriyie UEB3502023
import React, { useEffect, useRef } from 'react';

interface AnimatedChartCanvasProps {
  theme: 'dark' | 'light';
}

const AnimatedChartCanvas: React.FC<AnimatedChartCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  function debounce(fn: Function, ms: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), ms);
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let points: number[] = []; // Changed from const to let

    const gridColor = theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,120,255,0.06)';
    const axisColor = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
    const lineColor = theme === 'dark' ? 'rgba(0,255,204,0.85)' : 'rgba(0,120,255,0.95)';
    const barUp = theme === 'dark' ? 'rgba(0,200,150,0.9)' : 'rgba(0,120,255,0.95)';
    const barDown = 'rgba(255,80,100,0.9)';

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.max(200, Math.floor(width * devicePixelRatio));
      canvas.height = Math.max(100, Math.floor(height * devicePixelRatio));

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      // Initialize static points
      points = []; // Reassign with let
      const count = Math.max(40, Math.floor(width / 30));
      for (let i = 0; i < count; i++) {
        points.push(Math.sin(i * 0.6) * 0.4); // Static sine wave with fixed amplitude
      }

      drawChart(); // Draw once after resize
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;

      const stepX = Math.max(40, width / 12);
      for (let x = 0; x < width; x += stepX) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }

      const stepY = Math.max(24, height / 8);
      for (let y = 0; y < height; y += stepY) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      ctx.strokeStyle = axisColor;
      ctx.beginPath();
      ctx.moveTo(0, height / 2 + 0.5);
      ctx.lineTo(width, height / 2 + 0.5);
      ctx.stroke();
    };

    const drawLineAndBars = () => {
      if (!points.length) return;

      const margin = 20;
      const usableW = width - margin * 2;
      const usableH = height - margin * 2;

      const barCount = Math.min(6, Math.floor(points.length / 6));
      for (let b = 0; b < barCount; b++) {
        const i = Math.floor(b * (points.length - 1) / (barCount - 1));
        const px = margin + (i / (points.length - 1)) * usableW;
        const barHeight = (Math.abs(points[i]) * usableH) / 2 + 5; // Fixed height
        const up = points[i] > 0;

        ctx.fillStyle = up ? barUp : barDown;
        ctx.globalAlpha = 0.14;
        ctx.fillRect(px - 6, height / 2 - (up ? barHeight : 0), 12, up ? barHeight : -barHeight);
        ctx.globalAlpha = 1;
      }

      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = margin + (i / (points.length - 1)) * usableW;
        const y = height / 2 - (points[i] * usableH) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, 'rgba(255,255,255,0.06)');
      grad.addColorStop(0.2, lineColor);
      grad.addColorStop(1, 'rgba(255,255,255,0.06)');

      ctx.strokeStyle = grad;
      ctx.stroke();
    };

    const drawChart = () => {
      drawGrid();
      drawLineAndBars();
    };

    resize();
    drawChart(); // Initial draw

    const handleResize = debounce(() => {
      resize();
      drawChart(); // Redraw on resize
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, width, height); // Clear canvas
      }
      points = []; // Safe reassignment with let
    };
  }, [theme, devicePixelRatio]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedChartCanvas;
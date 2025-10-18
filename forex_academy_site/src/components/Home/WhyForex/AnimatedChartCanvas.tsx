// Eugene Afriyie UEB3502023
import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface AnimatedChartCanvasProps {
  theme: 'dark' | 'light';
}

const AnimatedChartCanvas: React.FC<AnimatedChartCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion() ?? false; // Fixed: Provide fallback
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  // Fixed: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout
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

    const gridColor = theme === 'dark' ? 'rgba(0,255,204,0.06)' : 'rgba(0,120,255,0.06)';
    const axisColor = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
    const lineColor = theme === 'dark' ? 'rgba(0,255,204,0.85)' : 'rgba(0,120,255,0.95)';
    const barUp = theme === 'dark' ? 'rgba(0,200,150,0.9)' : 'rgba(0,120,255,0.95)';
    const barDown = 'rgba(255,80,100,0.9)';

    let t = 0;
    let points: number[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.max(300, Math.floor(width * devicePixelRatio));
      canvas.height = Math.max(150, Math.floor(height * devicePixelRatio));

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const initPoints = () => {
      points = [];
      const count = Math.max(40, Math.floor(width / 30));
      for (let i = 0; i < count; i++) points.push(Math.sin(i * 0.6) * (Math.random() * 0.6 + 0.2));
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

      for (let i = 0; i < points.length; i++) {
        const noise = Math.sin((t + i) * 0.12) * 0.02 + (Math.random() - 0.5) * 0.01;
        points[i] = points[i] * 0.995 + noise;
      }

      const barCount = Math.min(6, Math.floor(points.length / 6));
      for (let b = 0; b < barCount; b++) {
        const i = Math.floor((t * 0.2 + b * 7) % points.length);
        const px = margin + (i / (points.length - 1)) * usableW;
        const barHeight = (Math.abs(points[i]) * usableH) / 2 + Math.random() * 10;
        const up = Math.random() > 0.3;

        ctx.fillStyle = up ? barUp : barDown;
        ctx.globalAlpha = 0.14;
        ctx.fillRect(px - 6, height / 2 - (up ? barHeight : 0), 12, up ? barHeight : barHeight);
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

    const step = () => {
      if (!isVisible || prefersReducedMotion) return;
      t += 1;
      drawGrid();
      drawLineAndBars();
      rafRef.current = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    resize();
    initPoints();
    if (!prefersReducedMotion) rafRef.current = window.requestAnimationFrame(step);

    const handleResize = debounce(() => {
      resize();
      initPoints();
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, isVisible, prefersReducedMotion, devicePixelRatio]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedChartCanvas;
import React, { useEffect, useRef } from 'react';

export const OceanCanvas = ({ className = "absolute inset-0 w-full h-full pointer-events-none" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Soft drifting clouds
    const clouds = [
      { x: width * 0.1, y: height * 0.12, r: 65, speed: 0.15, opacity: 0.35 },
      { x: width * 0.45, y: height * 0.22, r: 90, speed: 0.1, opacity: 0.25 },
      { x: width * 0.8, y: height * 0.08, r: 75, speed: 0.18, opacity: 0.3 },
      { x: width * 0.25, y: height * 0.3, r: 110, speed: 0.08, opacity: 0.2 }
    ];

    // Sea wave layers
    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Cinematic Sunset Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#0A0F1D');      // Night navy top
      skyGrad.addColorStop(0.3, '#1E2540');    // Twilight indigo
      skyGrad.addColorStop(0.55, '#68291F');   // Deep sunset rose
      skyGrad.addColorStop(0.75, '#D95C27');   // Warm sunset orange
      skyGrad.addColorStop(0.9, '#F5A623');    // Golden horizon glow
      skyGrad.addColorStop(1, '#FFF3C4');      // Radiant sunset light
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height * 0.75);

      // 2. Setting Sun
      const sunX = width * 0.48;
      const sunY = height * 0.62;
      const sunRadius = Math.min(width, height) * 0.18;

      const sunGlow = ctx.createRadialGradient(sunX, sunY, sunRadius * 0.2, sunX, sunY, sunRadius * 2);
      sunGlow.addColorStop(0, 'rgba(255, 248, 220, 0.95)');
      sunGlow.addColorStop(0.35, 'rgba(255, 178, 62, 0.6)');
      sunGlow.addColorStop(0.7, 'rgba(235, 94, 40, 0.2)');
      sunGlow.addColorStop(1, 'rgba(235, 94, 40, 0)');

      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // 3. Drifting Soft Anime Clouds
      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x - cloud.r * 2 > width) cloud.x = -cloud.r * 2;

        ctx.save();
        ctx.fillStyle = `rgba(255, 230, 210, ${cloud.opacity})`;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.r * 0.6, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.r * 0.45, cloud.y - cloud.r * 0.2, cloud.r * 0.75, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.r * 0.9, cloud.y, cloud.r * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 4. Sea Surface with Sun Path Shimmer
      const horizonY = height * 0.68;
      const seaGrad = ctx.createLinearGradient(0, horizonY, 0, height);
      seaGrad.addColorStop(0, '#243A5E');
      seaGrad.addColorStop(0.3, '#162843');
      seaGrad.addColorStop(0.7, '#0D1A2E');
      seaGrad.addColorStop(1, '#080D1A');
      ctx.fillStyle = seaGrad;
      ctx.fillRect(0, horizonY, width, height - horizonY);

      // 5. Sun Reflection on Water
      ctx.save();
      const reflectionGrad = ctx.createLinearGradient(sunX - 120, horizonY, sunX + 120, height);
      reflectionGrad.addColorStop(0, 'rgba(255, 235, 160, 0.45)');
      reflectionGrad.addColorStop(1, 'rgba(255, 140, 40, 0.05)');
      ctx.fillStyle = reflectionGrad;
      ctx.beginPath();
      ctx.moveTo(sunX - 50, horizonY);
      ctx.lineTo(sunX + 50, horizonY);
      ctx.lineTo(sunX + 180, height);
      ctx.lineTo(sunX - 180, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 6. Layered Animated Ocean Waves
      const waveLayers = [
        { y: horizonY + 15, amp: 4, freq: 0.012, speed: 0.8, color: 'rgba(255, 240, 180, 0.25)' },
        { y: horizonY + 45, amp: 7, freq: 0.009, speed: 1.1, color: 'rgba(56, 120, 180, 0.4)' },
        { y: horizonY + 95, amp: 11, freq: 0.007, speed: 1.4, color: 'rgba(30, 70, 120, 0.55)' },
        { y: horizonY + 160, amp: 16, freq: 0.005, speed: 1.7, color: 'rgba(14, 35, 65, 0.75)' },
        { y: horizonY + 240, amp: 22, freq: 0.004, speed: 2.0, color: '#080D1A' }
      ];

      waveLayers.forEach((layer, idx) => {
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, layer.y);

        for (let x = 0; x <= width; x += 15) {
          const waveY =
            layer.y +
            Math.sin(x * layer.freq + t * layer.speed) * layer.amp +
            Math.cos(x * layer.freq * 0.5 + t * layer.speed * 0.6) * (layer.amp * 0.4);
          ctx.lineTo(x, waveY);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      });

      // 7. Sea spray / glowing sunset sparkles
      ctx.fillStyle = 'rgba(255, 250, 200, 0.7)';
      for (let i = 0; i < 18; i++) {
        const sparkleX = sunX + (Math.sin(i * 99 + t) * (width * 0.15 + i * 4));
        const sparkleY = horizonY + 25 + (i * 14) + Math.cos(i * 45 + t * 2) * 4;
        if (sparkleY < height) {
          ctx.beginPath();
          ctx.arc(sparkleX, sparkleY, 1.2 + Math.sin(t * 3 + i) * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

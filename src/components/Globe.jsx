import { useEffect, useRef } from "react";

// Decorative rotating globe: a dotted sphere with great-circle arcs between
// major world cities. Pure canvas, no dependencies. Pauses off-screen and
// renders a single static frame when the user prefers reduced motion.

const CITIES = [
  [51.5, -0.12], [40.7, -74], [35.7, 139.7], [-33.9, 151.2], [1.35, 103.8],
  [25.2, 55.3], [-23.5, -46.6], [28.6, 77.2], [-1.3, 36.8], [52.5, 13.4],
  [37.8, -122.4], [55.7, 37.6], [30, 31.2], [19.4, -99.1], [-26.2, 28],
  [45.4, -75.7], [39.9, 116.4], [48.9, 2.35],
];
const ARCS = [
  [0, 1], [1, 10], [0, 5], [5, 7], [7, 4], [4, 3], [2, 4], [0, 8],
  [9, 11], [6, 1], [12, 14], [13, 1], [16, 2], [17, 12], [15, 0], [14, 3],
];
const DOT_COUNT = 1700;
const ARC_STEPS = 48;

const toVec = (lat, lon) => {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return [Math.cos(phi) * Math.sin(lam), Math.sin(phi), Math.cos(phi) * Math.cos(lam)];
};

const buildDots = () => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: DOT_COUNT }, (_, i) => {
    const y = 1 - (i / (DOT_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    return [Math.cos(golden * i) * r, y, Math.sin(golden * i) * r];
  });
};

const buildArc = (a, b) => {
  const va = toVec(...CITIES[a]);
  const vb = toVec(...CITIES[b]);
  const dot = Math.min(1, Math.max(-1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  const sinO = Math.sin(omega) || 1;
  return Array.from({ length: ARC_STEPS + 1 }, (_, i) => {
    const t = i / ARC_STEPS;
    const wa = Math.sin((1 - t) * omega) / sinO;
    const wb = Math.sin(t * omega) / sinO;
    const lift = 1 + Math.sin(Math.PI * t) * omega * 0.16;
    return [
      (va[0] * wa + vb[0] * wb) * lift,
      (va[1] * wa + vb[1] * wb) * lift,
      (va[2] * wa + vb[2] * wb) * lift,
    ];
  });
};

const buildGraticule = () => {
  const lines = [];
  for (let lat = -60; lat <= 60; lat += 30) {
    lines.push(Array.from({ length: 73 }, (_, i) => toVec(lat, -180 + i * 5)));
  }
  for (let lon = -180; lon < 180; lon += 30) {
    lines.push(Array.from({ length: 37 }, (_, i) => toVec(-90 + i * 5, lon)));
  }
  return lines;
};

const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dots = buildDots();
    const arcs = ARCS.map(([a, b]) => buildArc(a, b));
    const graticule = buildGraticule();
    const cityVecs = CITIES.map(([lat, lon]) => toVec(lat, lon));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let angle = 2.2;
    const tilt = 0.38;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (v, radius, cx, cy) => {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const x1 = v[0] * cosA + v[2] * sinA;
      const z1 = -v[0] * sinA + v[2] * cosA;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);
      const y2 = v[1] * cosT - z1 * sinT;
      const z2 = v[1] * sinT + z1 * cosT;
      return [cx + x1 * radius, cy - y2 * radius, z2];
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.46;
      const cx = width / 2;
      const cy = height / 2;

      const glow = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.25);
      glow.addColorStop(0, "rgba(169,196,255,0.08)");
      glow.addColorStop(1, "rgba(169,196,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      for (const line of graticule) {
        ctx.beginPath();
        let pen = false;
        for (const v of line) {
          const [x, y, z] = project(v, radius, cx, cy);
          if (z > 0) {
            if (pen) ctx.lineTo(x, y);
            else ctx.moveTo(x, y);
            pen = true;
          } else {
            pen = false;
          }
        }
        ctx.stroke();
      }

      for (const v of dots) {
        const [x, y, z] = project(v, radius, cx, cy);
        const a = z > 0 ? 0.3 + z * 0.65 : 0.07;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(x, y, 1.7, 1.7);
      }

      ctx.lineWidth = 1;
      arcs.forEach((arc, idx) => {
        const pts = arc.map((v) => project(v, radius, cx, cy));
        ctx.strokeStyle = "rgba(190,212,255,0.55)";
        ctx.beginPath();
        let pen = false;
        for (const [x, y, z] of pts) {
          if (z > -0.05) {
            if (pen) ctx.lineTo(x, y);
            else ctx.moveTo(x, y);
            pen = true;
          } else {
            pen = false;
          }
        }
        ctx.stroke();

        const t = ((time / 3600 + idx * 0.173) % 1 + 1) % 1;
        const [px, py, pz] = pts[Math.floor(t * ARC_STEPS)];
        if (pz > 0) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      for (const v of cityVecs) {
        const [x, y, z] = project(v, radius, cx, cy);
        if (z > 0) {
          ctx.fillStyle = "#a9c4ff";
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    let last = 0;
    const loop = (time) => {
      angle += (time - last) * 0.00006;
      last = time;
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);

    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibility.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default Globe;

import React, { useEffect, useRef, useState, useMemo } from "react";

const STATS = [
  { value: 100, suffix: '+', label: 'Discord Members', color: 'var(--stew-purple)' },
  { value: 99.9, suffix: '%', label: 'Uptime', color: 'var(--stew-gold)' },
  { value: 24, suffix: '/7', label: 'Always Online', color: 'var(--stew-orange)' },
];

function useCountUp(target, duration = 1600, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isFloat = target % 1 !== 0;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(isFloat ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function StatCard({ stat, index, active }) {
  const count = useCountUp(stat.value, 1600, active);
  const [hov, setHov] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {/* Glow — sits outside the card so it isn't clipped */}
      <div style={{
        position: 'absolute',
        inset: '-40px',
        background: `radial-gradient(circle at 50% 40%, ${stat.color}40, transparent 70%)`,
        filter: 'blur(30px)',
        opacity: hov ? 1 : 0.6,
        transition: 'opacity 0.35s',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? 'rgba(24,16,8,0.95)' : 'rgba(18,12,6,0.7)',
          border: `1px solid ${hov ? stat.color + '55' : 'rgba(245,234,214,0.07)'}`,
          borderRadius: '20px', padding: '44px 32px', textAlign: 'center',
          transform: active ? (hov ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(24px)',
          opacity: active ? 1 : 0,
          transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
          boxShadow: hov ? `0 28px 64px rgba(0,0,0,0.5), 0 0 40px ${stat.color}18` : '0 4px 24px rgba(0,0,0,0.2)',
          cursor: 'default', position: 'relative', overflow: 'hidden', zIndex: 1,
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '1px', background: `linear-gradient(to right, transparent, ${stat.color}60, transparent)`, opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }} />

        <div className="font-display" style={{ fontSize: 'clamp(2.6rem, 4vw, 3.4rem)', fontWeight: 800, color: stat.color, lineHeight: 1, marginBottom: '12px', textShadow: `0 0 40px ${stat.color}44` }}>
          {active ? count : 0}{stat.suffix}
        </div>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export function Starfield({ count = 30, opacity = 0.35 }) {
  const stars = useMemo(() => Array.from({ length: count }, (_, i) => ({
    left:  `${(i * 137.5) % 100}%`,
    top:   `${(i * 97.3) % 100}%`,
    size:  0.7 + (i % 3) * 0.6,
    dur:   `${3 + (i % 4)}s`,
    delay: `${(i * 0.22) % 5}s`,
  })), [count]);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', left: s.left, top: s.top,
          width: `${s.size}px`, height: `${s.size}px`,
          borderRadius: '50%', background: 'white', opacity,
          animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
        }} />
      ))}
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} style={{ padding: '120px 80px', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(245,234,214,0.05)', overflow: 'hidden' }}>
      <Starfield />
      <div style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--stew-green)', letterSpacing: '0.28em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>— By the numbers —</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--cream)', letterSpacing: '-0.025em', margin: 0 }}>
            Small Server. Big Community.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {STATS.map((s, i) => <StatCard key={i} stat={s} index={i} active={active} />)}
        </div>
      </div>
    </section>
  );
}
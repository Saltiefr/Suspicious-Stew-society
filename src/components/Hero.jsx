import React, { useMemo, useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { SERVER_IP } from "../config";

function Particle({ x, y, size, dur, delay, color }) {
  return (
    <div style={{
      position: 'absolute',
      left: `${x}%`, top: `${y}%`,
      width: `${size}px`, height: `${size}px`,
      borderRadius: size > 4 ? '3px' : '50%',
      background: color, opacity: 0,
      animation: `fadeUp ${dur}s ease-out ${delay}s infinite`,
      pointerEvents: 'none', willChange: 'transform, opacity',
    }} />
  );
}

function Starfield() {
  const stars = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    left:  `${(i * 137.5) % 100}%`,
    top:   `${(i * 97.3) % 100}%`,
    size:  0.8 + (i % 3) * 0.7,
    dur:   `${3 + (i % 4)}s`,
    delay: `${(i * 0.22) % 5}s`,
  })), []);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', left: s.left, top: s.top,
          width: `${s.size}px`, height: `${s.size}px`,
          borderRadius: '50%', background: 'white',
          animation: `twinkle ${s.dur} ease-in-out ${s.delay} infinite`,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const [copied, setCopied]     = useState(false);
  const [parallax, setParallax] = useState(0);
  const heroRef = useRef(null);

  const particles = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    x:     (i * 137.5) % 100,
    y:     20 + (i * 73) % 70,
    size:  3 + (i % 4),
    dur:   5 + (i % 6),
    delay: (i * 0.4) % 8,
    color: i % 3 === 0
      ? 'rgba(139,195,74,0.7)'
      : i % 3 === 1
      ? 'rgba(181,101,216,0.5)'
      : 'rgba(255,159,74,0.5)',
  })), []);

  useEffect(() => {
    const fn = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) setParallax(window.scrollY * 0.18);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(SERVER_IP); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section ref={heroRef} style={{
      position: 'relative',
      minHeight: 'calc(100vh - 72px)',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      <Starfield />

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Ambient orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {[
          { top: '0%',  left: '-5%', w: 700, color: 'rgba(139,195,74,0.09)',  dur: '20s', delay: '0s' },
          { top: '55%', right: '0%', w: 550, color: 'rgba(181,101,216,0.08)', dur: '24s', delay: '4s' },
          { top: '20%', left: '45%', w: 650, color: 'rgba(255,159,74,0.06)',  dur: '28s', delay: '8s' },
          { top: '70%', left: '20%', w: 400, color: 'rgba(139,195,74,0.05)',  dur: '22s', delay: '2s' },
        ].map((o, i) => (
          <div key={i} style={{
            position: 'absolute', top: o.top, left: o.left, right: o.right,
            width: `${o.w}px`, height: `${o.w}px`,
            borderRadius: '50%', background: o.color, filter: 'blur(100px)',
            animation: `orbDrift ${o.dur} ease-in-out ${o.delay} infinite alternate`,
            transform: `translateY(${parallax * (i % 2 === 0 ? 0.3 : -0.2)}px)`,
          }} />
        ))}
      </div>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(139,195,74,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,195,74,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(10,8,6,0.8) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: '1320px',
        margin: '0 auto', padding: '0 80px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '60px',
      }}>

        {/* Left: text */}
        <div style={{ flex: '0 1 680px', minWidth: 0 }}>

          {/* Eyebrow pill */}
          <div style={{
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s both',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            marginBottom: '36px',
            background: 'rgba(139,195,74,0.08)',
            border: '1px solid rgba(139,195,74,0.2)',
            borderRadius: '999px', padding: '7px 16px 7px 10px',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--stew-green)',
              boxShadow: '0 0 8px var(--stew-green)',
              display: 'inline-block',
              animation: 'pulseGreenDot 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <span className="font-mono" style={{
              fontSize: '0.7rem', fontWeight: 600,
              color: 'var(--stew-green)', letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}>
              Server Online · {SERVER_IP}
            </span>
          </div>

          {/* Headlines */}
          <h1 className="font-display" style={{
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.22s both',
            fontSize: 'clamp(3.2rem, 6vw, 5.8rem)', fontWeight: 800,
            lineHeight: 1.0, letterSpacing: '-0.025em',
            color: 'var(--cream)', marginBottom: '0',
          }}>
            The Most
          </h1>
          <h1 className="font-display" style={{
            fontSize: 'clamp(3.2rem, 6vw, 5.8rem)', fontWeight: 800,
            lineHeight: 1.0, letterSpacing: '-0.025em',
            background: 'linear-gradient(135deg, #8BC34A 0%, #C5E87A 45%, #6FA832 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.36s both, shimmer 4s linear 1.5s infinite',
            marginBottom: '0',
          }}>
            Suspicious Stew
          </h1>
          <h1 className="font-display" style={{
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both',
            fontSize: 'clamp(3.2rem, 6vw, 5.8rem)', fontWeight: 800,
            lineHeight: 1.0, letterSpacing: '-0.025em',
            color: 'rgba(245,234,214,0.75)', marginBottom: '36px',
          }}>
            In Minecraft.
          </h1>

          {/* Description */}
          <p style={{
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.62s both',
            fontFamily: "'Nunito', sans-serif",
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', fontWeight: 500,
            color: 'var(--muted)', lineHeight: 1.8,
            maxWidth: '520px', marginBottom: '48px',
          }}>
            A semi-vanilla survival SMP with a tight-knit community, voice chat,
            player-driven economy, and enough plugins to keep things fresh —
            without losing what makes Minecraft great.
          </p>

          {/* CTAs */}
          <div style={{
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.74s both',
            display: 'flex', gap: '16px', alignItems: 'center',
            flexWrap: 'wrap', marginBottom: '44px',
          }}>
            <button onClick={handleCopy} className="font-mono" style={{
              background: 'var(--stew-green)', color: '#0A0806',
              border: 'none', padding: '16px 32px', borderRadius: '10px',
              fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.03em',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 0 40px rgba(139,195,74,0.35)',
              transition: 'transform 0.25s, box-shadow 0.25s, background 0.2s',
              animation: 'pulseGreen 2.8s ease-in-out infinite',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 48px rgba(139,195,74,0.6)';
                e.currentTarget.style.background = '#9FD65C';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(139,195,74,0.35)';
                e.currentTarget.style.background = 'var(--stew-green)';
              }}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? 'IP Copied!' : 'Copy Server IP'}
            </button>

            <button
              onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(245,234,214,0.05)', color: 'var(--cream)',
                border: '1px solid rgba(245,234,214,0.15)',
                padding: '16px 32px', borderRadius: '10px',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700, fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'border-color 0.25s, color 0.25s, background 0.25s, transform 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(139,195,74,0.5)';
                e.currentTarget.style.color = 'var(--stew-green)';
                e.currentTarget.style.background = 'rgba(139,195,74,0.06)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(245,234,214,0.15)';
                e.currentTarget.style.color = 'var(--cream)';
                e.currentTarget.style.background = 'rgba(245,234,214,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              How to Join
            </button>
          </div>

          {/* Info line */}
          <div style={{ animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.86s both', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--stew-green)', boxShadow: '0 0 10px var(--stew-green)',
              flexShrink: 0, animation: 'pulseGreenDot 2s ease-in-out infinite',
            }} />
            <span className="font-mono" style={{ fontSize: '0.72rem', color: 'rgba(168,152,128,0.6)', letterSpacing: '0.12em' }}>
              Java 1.20+ &amp; Bedrock · play.suspiciousstew.net
            </span>
          </div>
        </div>

        {/* Right: Minecraft suspicious stew pixel art */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'popIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both',
        }}>
          <div style={{
            width: 'clamp(220px, 28vw, 380px)',
            height: 'clamp(220px, 28vw, 380px)',
            animation: 'floatY 4.5s ease-in-out infinite',
            willChange: 'transform, filter',
            filter: 'drop-shadow(0 16px 60px rgba(139,195,74,0.3)) drop-shadow(0 0 100px rgba(255,159,74,0.15))',
            imageRendering: 'pixelated',
          }}>
            <img
              src="/suspicious-stew.png"
              alt="Suspicious Stew"
              style={{
                width: '100%', height: '100%',
                objectFit: 'contain',
                imageRendering: 'pixelated',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '44px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        animation: 'fadeUp 1s 1.4s both', zIndex: 2,
      }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(168,152,128,0.35)' }}>Scroll</span>
        <div style={{ width: '1px', height: '52px', background: 'rgba(139,195,74,0.2)', position: 'relative', overflow: 'hidden', borderRadius: '1px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '45%', background: 'linear-gradient(to bottom, var(--stew-green), transparent)', animation: 'scanDown 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
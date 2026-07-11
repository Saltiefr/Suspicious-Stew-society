import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { SERVER_IP } from "../config";
import { Starfield } from "./Stats";

const STEPS = [
  { step: '01', title: 'Launch Minecraft',  color: 'var(--stew-green)',  desc: "Open Minecraft Java 1.20+ or Bedrock Edition on any platform. Make sure you're fully updated for the best experience." },
  { step: '02', title: 'Add the Server',    color: 'var(--stew-gold)',   desc: 'Go to Multiplayer → Add Server. Paste the server address into the Server Address field and hit Done.' },
  { step: '03', title: 'Join & Brew',       color: 'var(--stew-purple)', desc: "Click Join Server. Talk to the Society Greeter to get your starter kit and first recipe scroll. You're in." },
];

export default function HowToJoin() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(SERVER_IP); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="join" style={{ padding: '120px 80px', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(245,234,214,0.05)', overflow: 'hidden' }}>
      <Starfield />
      <div style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--stew-green)', letterSpacing: '0.28em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>— Join the Society —</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--cream)', marginBottom: '18px', letterSpacing: '-0.025em' }}>
            Ready in 3 Steps
          </h2>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.75 }}>
            No whitelist. No application. Paste the IP and start brewing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-34px',
                background: `radial-gradient(circle at 50% 25%, ${s.color}40, transparent 70%)`,
                filter: 'blur(28px)', opacity: 0.5,
                pointerEvents: 'none', zIndex: 0,
              }} />
              <div style={{
                background: 'rgba(17,13,9,0.8)',
                border: '1px solid rgba(245,234,214,0.06)',
                borderRadius: '20px', padding: '40px 32px',
                position: 'relative', overflow: 'hidden', zIndex: 1,
                transition: 'border-color 0.3s, transform 0.35s, box-shadow 0.35s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.color + '44';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 20px ${s.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(245,234,214,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="font-display" style={{
                  position: 'absolute', top: '-16px', right: '16px',
                  fontSize: '6.5rem', fontWeight: 800,
                  color: s.color, opacity: 0.05,
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                }}>
                  {s.step}
                </div>

                <span className="font-mono" style={{ fontSize: '0.62rem', fontWeight: 700, color: s.color, letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  Step {s.step}
                </span>

                <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--cream)', marginBottom: '14px', letterSpacing: '-0.015em' }}>
                  {s.title}
                </h3>

                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.93rem', fontWeight: 500, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(14,10,6,0.9)',
          border: '1px solid rgba(139,195,74,0.18)',
          borderRadius: '24px', padding: '56px 64px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px',
          boxShadow: '0 0 80px rgba(139,195,74,0.05), inset 0 0 80px rgba(139,195,74,0.02)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(139,195,74,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(139,195,74,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '40%', height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(139,195,74,0.4), transparent)',
          }} />

          <div style={{ position: 'relative' }}>
            <span className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--stew-green)', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Server Address
            </span>
            <p className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--cream)', margin: 0, letterSpacing: '-0.02em' }}>
              {SERVER_IP}
            </p>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.85rem', color: 'var(--muted)', marginTop: '10px', marginBottom: 0 }}>
              Java 1.20+ &amp; Bedrock compatible · Free to play
            </p>
          </div>

          <button onClick={handleCopy} className="font-mono" style={{
            background: copied ? 'var(--stew-green2)' : 'var(--stew-green)',
            color: '#0A0806', border: 'none',
            padding: '18px 44px', borderRadius: '12px',
            fontWeight: 800, fontSize: '1rem', letterSpacing: '0.04em',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
            boxShadow: '0 0 40px rgba(139,195,74,0.3)',
            transition: 'transform 0.25s, box-shadow 0.25s, background 0.2s',
            position: 'relative', zIndex: 1,
            animation: 'pulseGreen 2.8s ease-in-out infinite',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 48px rgba(139,195,74,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(139,195,74,0.3)';
            }}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy IP'}
          </button>
        </div>
      </div>
    </section>
  );
}

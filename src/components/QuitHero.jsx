import React from "react";

export default function QuitHero() {
  return (
    <section className="iq-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

        .iq-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(ellipse 900px 600px at 50% 38%, #29292c 0%, #1b1b1d 55%, #141415 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8vh 6vw;
          overflow: hidden;
          font-family: 'IBM Plex Mono', monospace;
          box-sizing: border-box;
        }

        .iq-hero * { box-sizing: border-box; }

        .iq-spotlight {
          position: absolute;
          top: -20%;
          left: 50%;
          width: 1200px;
          height: 1200px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(244, 211, 94, 0.06) 0%, rgba(244, 211, 94, 0) 60%);
          pointer-events: none;
          animation: iq-pulse 6s ease-in-out infinite;
        }

        @keyframes iq-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        .iq-eyebrow {
          position: relative;
          color: #e63946;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          margin-bottom: 28px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(230, 57, 70, 0.35);
        }

        .iq-note {
          position: relative;
          background: #f4d35e;
          color: #201c02;
          max-width: 780px;
          width: 100%;
          padding: 56px 48px;
          transform: rotate(-1.6deg);
          box-shadow: 0 30px 60px rgba(0,0,0,0.55), 0 2px 0 rgba(0,0,0,0.1);
          animation: iq-drop 0.7s cubic-bezier(.2,.9,.3,1.1) both;
        }

        @keyframes iq-drop {
          0% { opacity: 0; transform: rotate(-1.6deg) translateY(-24px) scale(0.98); }
          100% { opacity: 1; transform: rotate(-1.6deg) translateY(0) scale(1); }
        }

        .iq-note h1 {
          font-family: 'Kalam', cursive;
          font-weight: 700;
          font-size: clamp(32px, 5.2vw, 58px);
          line-height: 1.18;
          margin: 0;
        }

        .iq-tape {
          position: absolute;
          width: 90px;
          height: 28px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        }
        .iq-tape-left {
          top: -14px;
          left: 40px;
          transform: rotate(-8deg);
        }
        .iq-tape-right {
          top: -14px;
          right: 40px;
          transform: rotate(6deg);
        }

        .iq-signoff {
          position: relative;
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 22px;
          border: 1px solid #3a3a3d;
          background: rgba(255,255,255,0.02);
        }

        .iq-signoff-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6f6b62;
        }

        .iq-signoff-value {
          font-size: 14px;
          font-weight: 600;
          color: #f4d35e;
          letter-spacing: 0.04em;
        }

        @media (max-width: 640px) {
          .iq-note { padding: 40px 28px; }
          .iq-tape-left, .iq-tape-right { display: none; }
        }
      `}</style>

      <div className="iq-spotlight" />

      <div className="iq-eyebrow">Notice — effective immediately</div>

      <div className="iq-note">
        <span className="iq-tape iq-tape-left" />
        <span className="iq-tape iq-tape-right" />
        <h1>I dont wanna have my work,<br />where it isnt valued.</h1>
      </div>

      <div className="iq-signoff">
        <span className="iq-signoff-label">Status</span>
        <span className="iq-signoff-value">Done. Today.</span>
      </div>
    </section>
  );
}

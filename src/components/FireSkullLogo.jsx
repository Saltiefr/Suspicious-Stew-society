import React from "react";

export default function FireSkullLogo({ size = 44 }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Embers drifting off the flame */}
      {[
        { left: "56%", top: "4%",  delay: "0s",   dur: "2.2s", size: 3.4 },
        { left: "66%", top: "10%", delay: "0.5s", dur: "1.9s", size: 2.4 },
        { left: "47%", top: "2%",  delay: "1s",   dur: "2.6s", size: 3 },
        { left: "74%", top: "16%", delay: "1.5s", dur: "2s",   size: 2.2 },
        { left: "40%", top: "12%", delay: "0.8s", dur: "2.4s", size: 2 },
        { left: "60%", top: "0%",  delay: "1.8s", dur: "2.1s", size: 2.6 },
      ].map((e, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: e.left,
            top: e.top,
            width: `${e.size}px`,
            height: `${e.size}px`,
            borderRadius: "50%",
            background: i % 2 === 0 ? "var(--stew-gold)" : "var(--stew-orange)",
            boxShadow: `0 0 6px ${i % 2 === 0 ? "var(--stew-gold)" : "var(--stew-orange)"}`,
            opacity: 0,
            animation: `emberRise ${e.dur} ease-in ${e.delay} infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        style={{ position: "relative", zIndex: 1, overflow: "visible" }}
      >
        <defs>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%"   stopColor="#E8681F" />
            <stop offset="35%"  stopColor="var(--stew-orange)" />
            <stop offset="65%"  stopColor="var(--stew-gold)" />
            <stop offset="100%" stopColor="#FFF8DC" />
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="55%" r="65%">
            <stop offset="0%"  stopColor="rgba(255,159,74,0.65)" />
            <stop offset="55%" stopColor="rgba(255,159,74,0.2)" />
            <stop offset="100%" stopColor="rgba(255,159,74,0)" />
          </radialGradient>
        </defs>

        {/* Ambient glow behind everything */}
        <circle cx="32" cy="24" r="30" fill="url(#flameGlow)">
          <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Flame — three layered blobs animate independently for a rich flicker */}
        <g>
          <path
            d="M32 2c-6 7-13 11-10 20 1 5 6 6 5 12-1 5-6 6-4 10 4-1 7-4 8-8 3 7 11 6 12-1 1-6-4-8-3-13 1-6 6-8 3-14-2 5-6 6-7 2-1-4 3-7-4-8z"
            fill="url(#flameGrad)"
            style={{
              transformOrigin: "32px 30px",
              animation: "flicker1 1.3s ease-in-out infinite",
            }}
          />
          <path
            d="M30 8c-4 6-8 9-6 16 1 4 4 5 3 9-1 3-3 4-2 7 2-1 5-3 6-6 2 5 8 4 8-1 1-5-2-6-1-10 1-5 4-6 2-10-1 4-3 5-5 2-1-4 2-5-5-7z"
            fill="#FFDD8A"
            opacity="0.9"
            style={{
              transformOrigin: "30px 20px",
              animation: "flicker2 0.9s ease-in-out infinite",
            }}
          />
          <path
            d="M31 16c-2 4-5 6-3 10 1 3 3 3 2 6-1 2-2 3-1 4 1-1 3-2 3-4 2 3 5 2 5-1 0-3-2-4-1-6 1-3 2-4 1-6-1 2-2 3-3 1-1-2 1-3-3-4z"
            fill="#FFF8DC"
            opacity="0.95"
            style={{
              transformOrigin: "31px 24px",
              animation: "flicker3 0.7s ease-in-out infinite",
            }}
          />
        </g>

        {/* Skull */}
        <g>
          <path
            d="M32 26c-8 0-14 5-14 12 0 5 2 7 3 10 0 2-1 3 0 5 1 1 3 1 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1-2 0-3 0-5 1-3 3-5 3-10 0-7-6-12-14-12z"
            fill="var(--cream)"
          />
          <ellipse cx="27" cy="37" rx="3.3" ry="4.2" fill="#0A0806" />
          <ellipse cx="37" cy="37" rx="3.3" ry="4.2" fill="#0A0806" />
          <path d="M32 41.5l-2.2 3.2h4.4z" fill="#0A0806" />
          <path
            d="M22 48c1 2 1 3 0 5m4-5c1 2 1 4 0 6m8-6c0 2 0 4 1 6m4-6c0 2 0 4-1 6m4-6c-1 2-1 3 0 5"
            stroke="#0A0806"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
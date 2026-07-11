import React, { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    icon: "",
    title: "Proximity Voice Chat",
    tag: "Social",
    color: "var(--stew-green)",
    desc: "Talk to nearby players in real time with built-in proximity voice chat. No Discord required — just hop in and chat with whoever is around you.",
  },
  {
    icon: "",
    title: "Java & Bedrock Cross-Play",
    tag: "Accessibility",
    color: "var(--stew-purple)",
    desc: "Play from almost any device. Java and Bedrock players can join the same world together with a smooth cross-platform experience.",
  },
  {
    icon: "",
    title: "Player Auction House",
    tag: "Economy",
    color: "var(--stew-gold)",
    desc: "Buy and sell items through the server-wide marketplace. Set your own prices, browse listings, and build your fortune.",
  },
  {
    icon: "",
    title: "Teams",
    tag: "Multiplayer",
    color: "var(--stew-orange)",
    desc: "Create a team, invite friends, and build together. Work as a group while enjoying a more connected multiplayer experience.",
  },
  {
    icon: "",
    title: "Homes & Warps",
    tag: "Quality of Life",
    color: "var(--stew-gold)",
    desc: "Set homes, return to spawn instantly, teleport to unexplored terrain, and use community warps to travel across the server.",
  },
  {
    icon: "",
    title: "Tree Feller & Vein Miner",
    tag: "Survival",
    color: "var(--stew-orange)",
    desc: "Cut down entire trees with a single swing and mine connected ore veins at once. Small quality-of-life improvements that keep survival fun.",
  },
  {
    icon: "",
    title: "Disguises & Cosmetics",
    tag: "Fun",
    color: "var(--stew-green)",
    desc: "Express yourself with fun disguises, custom appearances, and cosmetic features that let your character stand out.",
  },
];

function FeatureCard({ f, index }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(24,16,8,0.95)" : "rgba(17,13,9,0.8)",
        border: `1px solid ${
          hov ? f.color + "44" : "rgba(245,234,214,0.06)"
        }`,
        borderRadius: "20px",
        padding: "40px 32px",
        opacity: vis ? 1 : 0,
        transform: vis
          ? hov
            ? "translateY(-7px)"
            : "translateY(0)"
          : "translateY(36px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${
          index * 0.07
        }s,
                     transform 0.7s cubic-bezier(0.16,1,0.3,1) ${
                       index * 0.07
                     }s,
                     border-color 0.3s, box-shadow 0.3s, background 0.3s`,
        boxShadow: hov
          ? `0 28px 64px rgba(0,0,0,0.45), 0 0 0 1px ${f.color}18`
          : "none",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "140px",
          height: "140px",
          background: `radial-gradient(circle at top right, ${f.color}18, transparent 70%)`,
          pointerEvents: "none",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      <span
        className="font-mono"
        style={{
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: f.color,
          background: `${f.color}12`,
          padding: "5px 12px",
          borderRadius: "5px",
          border: `1px solid ${f.color}28`,
          display: "inline-block",
          marginBottom: "24px",
        }}
      >
        {f.tag}
      </span>

      <div
        style={{
          fontSize: "2.6rem",
          marginBottom: "18px",
          display: "block",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          transform: hov
            ? "scale(1.2) rotate(-6deg)"
            : "scale(1)",
          filter: hov
            ? `drop-shadow(0 4px 16px ${f.color}55)`
            : "none",
        }}
      >
        {f.icon}
      </div>

      <h3
        className="font-display"
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "var(--cream)",
          marginBottom: "14px",
          letterSpacing: "-0.015em",
        }}
      >
        {f.title}
      </h3>

      <p
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "0.93rem",
          fontWeight: 500,
          color: "var(--muted)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {f.desc}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "120px 80px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(245,234,214,0.05)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "var(--stew-green)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "18px",
            }}
          >
            — What's Included —
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--cream)",
              marginBottom: "18px",
              letterSpacing: "-0.025em",
            }}
          >
            Vanilla at Heart. Enhanced Everywhere.
          </h2>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.05rem",
              color: "var(--muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Carefully crafted features that improve multiplayer, exploration,
            and quality of life while keeping the core Minecraft survival
            experience completely vanilla.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
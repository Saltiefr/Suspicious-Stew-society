import React, { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { STORE_URL } from "../config";

const CHESTS = [
  {
    name: "Wooden Chest",
    icon: "",
    tier: "Starter",
    color: "#B08968",
    price: "$4.99",
    perks: ["500 in-game coins", "Colored chat name", "1 extra /home", "Kit access every 24h"],
  },
  {
    name: "Iron Chest",
    icon: "",
    tier: "Popular",
    color: "#C7D3DB",
    price: "$9.99",
    perks: ["1,500 in-game coins", "3 extra /homes", "Kit access every 12h", "Priority queue on join"],
  },
  {
    name: "Diamond Chest",
    icon: "",
    tier: "Best Value",
    color: "#5FD3D9",
    price: "$19.99",
    perks: ["4,000 in-game coins", "6 extra /homes", "Kit access every 6h", "Custom join message", "Exclusive disguise pack"],
  },
  {
    name: "Amethyst Chest",
    icon: "",
    tier: "Ultimate",
    color: "#B565D8",
    price: "$34.99",
    perks: ["10,000 in-game coins", "Unlimited /homes", "Kit access every 2h", "Particle trail effects", "First access to new features"],
  },
];

function ChestCard({ chest }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(24,16,8,0.95)" : "rgba(17,13,9,0.8)",
        border: `1px solid ${hov ? chest.color + "55" : "rgba(245,234,214,0.06)"}`,
        borderRadius: "20px",
        padding: "36px 28px",
        display: "flex",
        flexDirection: "column",
        transform: hov ? "translateY(-7px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: hov ? `0 28px 64px rgba(0,0,0,0.45), 0 0 0 1px ${chest.color}18` : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span className="font-mono" style={{
        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: chest.color,
        background: `${chest.color}14`, padding: '4px 10px',
        borderRadius: '5px', border: `1px solid ${chest.color}30`,
        display: 'inline-block', width: 'fit-content', marginBottom: '20px',
      }}>
        {chest.tier}
      </span>

      <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{chest.icon}</div>

      <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--cream)', marginBottom: '6px' }}>
        {chest.name}
      </h3>

      <div className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, color: chest.color, marginBottom: '18px' }}>
        {chest.price}
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: '28px', flex: 1 }}>
        {chest.perks.map((p, i) => (
          <li key={i} style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '0.86rem',
            color: 'var(--muted)', marginBottom: '10px',
            display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5,
          }}>
            <span style={{ color: chest.color, flexShrink: 0 }}>✓</span>
            {p}
          </li>
        ))}
      </ul>

      {/* FIXED: Added missing 'a' tag identifier here */}
      <a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono"
        style={{
          background: hov ? chest.color : `${chest.color}22`,
          color: hov ? '#0A0806' : chest.color,
          border: `1px solid ${chest.color}55`,
          padding: '13px 20px', borderRadius: '10px',
          fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.03em',
          textDecoration: 'none', textAlign: 'center',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          transition: 'all 0.25s',
        }}
      >
        Buy Now <ExternalLink size={13} />
      </a>
    </div>
  );
}

export default function Shop() {
  return (
    <section id="shop" style={{
      padding: '120px 80px', position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(245,234,214,0.05)',
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="font-mono" style={{
            fontSize: '0.7rem', fontWeight: 600, color: 'var(--stew-gold)',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            display: 'block', marginBottom: '18px',
          }}>— Support the Server —</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800,
            color: 'var(--cream)', marginBottom: '18px', letterSpacing: '-0.025em',
          }}>
            The Shop
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif", fontSize: '1.05rem',
            color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75,
          }}>
            Grab a chest for perks and cosmetics, or go custom with a personalized rank.
            Nothing here is pay-to-win — just fun extras that help keep the lights on.
          </p>
        </div>

        {/* Chests grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px', marginBottom: '48px',
        }}>
          {CHESTS.map((c, i) => <ChestCard key={i} chest={c} />)}
        </div>

        {/* Custom ranks callout */}
        <div style={{
          background: 'rgba(14,10,6,0.9)',
          border: '1px solid rgba(181,101,216,0.25)',
          borderRadius: '24px', padding: '44px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px',
          boxShadow: '0 0 60px rgba(181,101,216,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 320px' }}>
            <Sparkles size={32} color="var(--stew-purple)" style={{ flexShrink: 0 }} />
            <div>
              <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--cream)', marginBottom: '6px' }}>
                Want a Custom Rank?
              </h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                Pick your own name, color, and chat prefix. Reach out on Discord to get a custom rank built just for you.
              </p>
            </div>
          </div>
          
          {/* FIXED: Added missing 'a' tag identifier here */}
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{
              background: 'var(--stew-purple)', color: '#0A0806',
              border: 'none', padding: '14px 28px', borderRadius: '10px',
              fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.03em',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            Visit Store <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
import React from "react";

const ITEMS = [
  '🍲 Suspicious Stew Society',
  '🎙️ Proximity Voice Chat',
  '📱 Java & Bedrock Cross-Play',
  '🏪 Auction House',
  '⚔️ Teams & Factions',
  '🗺️ Live World Map',
  '🧭 Set Homes & Warps',
  '🌲 Tree Feller & Vein Miner',
  '🔒 Grief Protection',
  '🎭 Disguises & Skins',
  '🛡️ 24/7 Uptime',
  '✦ Semi-Vanilla SMP',
];

export default function Marquee() {
  const text = ITEMS.join('   ·   ') + '   ·   ';
  return (
    <div style={{
      background: 'rgba(139,195,74,0.05)',
      borderTop: '1px solid rgba(139,195,74,0.1)',
      borderBottom: '1px solid rgba(139,195,74,0.1)',
      padding: '14px 0', overflow: 'hidden',
      position: 'relative', zIndex: 1,
    }}>
      <div className="marquee-track">
        {Array(8).fill(text).map((t, i) => (
          <span key={i} className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(139,195,74,0.7)', whiteSpace: 'nowrap' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
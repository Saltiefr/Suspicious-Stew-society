import React from "react";
import { SERVER_IP, DISCORD_URL } from "../config";

const LINKS = [
  { label: 'Features',    href: '#features' },
  { label: 'Stats',       href: '#stats'    },
  { label: 'Shop',        href: '#shop'     },
  { label: 'How to Join', href: '#join'     },
  { label: 'Discord',     href: DISCORD_URL, external: true },
];

export default function Footer() {
  const smoothScroll = href => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(245,234,214,0.06)',
      padding: '72px 80px 44px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap',
          gap: '48px', marginBottom: '56px',
        }}>

          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.7rem' }}>🍲</span>
              <span className="font-display" style={{
                fontSize: '0.95rem', fontWeight: 800,
                color: 'var(--cream)', letterSpacing: '0.05em',
              }}>
                SUSPICIOUS STEW SOCIETY
              </span>
            </div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '0.9rem', color: 'var(--muted)',
              lineHeight: 1.7, marginBottom: '18px',
            }}>
              A Minecraft survival server with secrets worth finding. Every bowl hides something.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--stew-green)',
                boxShadow: '0 0 8px var(--stew-green)',
                flexShrink: 0,
                animation: 'pulseGreenDot 2s ease-in-out infinite',
              }} />
              <span className="font-mono" style={{
                fontSize: '0.72rem', color: 'rgba(139,195,74,0.6)',
                letterSpacing: '0.1em',
              }}>
                {SERVER_IP}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', paddingTop: '4px' }}>
            {LINKS.map(({ label, href, external }) => (
              <a key={label} href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={e => { if (!external) { e.preventDefault(); smoothScroll(href); } }}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.88rem', fontWeight: 700,
                  color: 'var(--muted)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--stew-green)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(245,234,214,0.05)',
          paddingTop: '28px',
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', alignItems: 'center',
        }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.76rem', color: 'rgba(168,152,128,0.35)', margin: 0,
          }}>
            © {new Date().getFullYear()} Suspicious Stew Society · Not affiliated with Mojang or Microsoft.
          </p>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.76rem', fontStyle: 'italic',
            color: 'rgba(139,195,74,0.3)', margin: 0,
          }}>
            Every bowl hides a secret. 🍲
          </p>
        </div>
      </div>
    </footer>
  );
}
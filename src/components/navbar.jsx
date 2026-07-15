import React, { useState, useEffect } from "react";
import { Menu, X, Copy, Check, MessageCircle } from "lucide-react";
import { SERVER_IP, DISCORD_URL } from "../config";
import FireSkullLogo from "./FireSkullLogo";

const NAV_LINKS = [
  { label: 'Features',    href: '#features' },
  { label: 'Stats',       href: '#stats'    },
  { label: 'Shop',        href: '#shop'     },
  { label: 'How to Join', href: '#join'     },
  { label: 'Discord',     href: DISCORD_URL, external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied,   setCopied]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(SERVER_IP); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const smoothScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleNavClick = (e, link) => {
    if (link.external) return; // let the <a> handle it (opens in new tab)
    e.preventDefault();
    smoothScroll(link.href);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(10,8,6,0.96)' : 'rgba(10,8,6,0.0)',
        borderBottom: scrolled ? '1px solid rgba(139,195,74,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: scrolled ? '0 4px 60px rgba(0,0,0,0.6)' : 'none',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: '1320px', margin: '0 auto',
          padding: '0 48px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>

          {/* Brand */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <FireSkullLogo size={40} />
            <span className="font-display" style={{
              fontSize: '1rem', fontWeight: 800,
              color: 'var(--cream)', letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
            }}>
              SUSPICIOUS STEW SOCIETY
            </span>
          </a>

          {/* Desktop nav */}
          <div className="sss-hide-mobile" style={{
            display: 'flex', alignItems: 'center', gap: '32px',
          }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={e => handleNavClick(e, link)}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: 'rgba(184,168,143,0.75)',
                  textDecoration: 'none', fontWeight: 700,
                  fontSize: '0.88rem', letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  position: 'relative', paddingBottom: '3px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--stew-green)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(184,168,143,0.75)'}
              >
                {link.external && <MessageCircle size={14} />}
                {link.label}
              </a>
            ))}

            <button onClick={handleCopy} className="font-mono" style={{
              background: 'var(--stew-green)',
              color: '#0A0806',
              border: 'none',
              padding: '9px 20px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '7px',
              transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              animation: 'pulseGreen 2.8s ease-in-out infinite',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,195,74,0.5)';
                e.currentTarget.style.background = '#9FD65C';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.background = 'var(--stew-green)';
              }}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copied!' : SERVER_IP}
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="sss-hide-desktop"
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', padding: '6px', zIndex: 101, position: 'relative' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div className="sss-hide-desktop" style={{
        position: 'fixed', inset: 0,
        background: 'rgba(10,8,6,0.98)',
        backdropFilter: 'blur(24px)',
        zIndex: 99,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        gap: '36px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: menuOpen ? 'all' : 'none',
      }}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            onClick={e => handleNavClick(e, link)}
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: '2.2rem', fontWeight: 800,
              color: 'var(--cream)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '10px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--stew-green)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
          >{link.label}</a>
        ))}
        <button onClick={handleCopy} className="font-mono" style={{
          marginTop: '8px', background: 'var(--stew-green)', color: '#0A0806',
          border: 'none', padding: '16px 40px', borderRadius: '10px',
          fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied!' : `Copy IP — ${SERVER_IP}`}
        </button>
      </div>

      {/* Spacer */}
      <div style={{ height: '72px' }} />
    </>
  );
}
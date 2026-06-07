import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Equipo', href: '#team' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,27,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,30,64,0.8)' : 'none',
        padding: '0 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', zIndex: 51 }}>
          <img 
            src="/img/NC/NCWhiteL.png" 
            alt="NotCore Logo" 
            style={{ height: '40px', width: 'auto' }}
          />
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'none', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: '#A0A0C0',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#5BCFCF'}
                onMouseLeave={e => e.target.style.color = '#A0A0C0'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA - Desktop */}
        <a
          href="#contact"
          style={{
            display: 'none',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.5rem',
            background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.85rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Contactar
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#A0A0C0',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 51,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(10,10,27,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(30,30,64,0.8)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 50,
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                color: '#A0A0C0',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  )
}

/* Mobile-first styles */
const style = document.createElement('style')
style.textContent = `
  @media (min-width: 768px) {
    .desktop-nav { display: flex !important; }
    [href="#contact"]:not(:has(+ button)) { display: inline-block !important; }
    button { display: none !important; }
  }
`
if (typeof document !== 'undefined') {
  document.head.appendChild(style)
}

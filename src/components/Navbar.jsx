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
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0, #5BCFCF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}>NC</span>
          <span style={{ color: '#F0F0F0', fontWeight: 600, fontSize: '1.1rem' }}>NotCore</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
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

        {/* CTA */}
        <a
          href="#contact"
          style={{
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
      </div>
    </nav>
  )
}

import { version } from '../../package.json'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1E1E40',
      background: 'linear-gradient(to bottom, transparent, rgba(10,10,27,0.8))',
      padding: '3rem 1.5rem 2rem',
      marginTop: '2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #1E1E40',
        }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none' }}>
            <img src="/img/NC/NCWhiteL.png" alt="NotCore" style={{ height: '36px', width: 'auto' }} />
          </a>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['#hero', '#about', '#projects', '#team', '#contact'].map((href, i) => (
              <a
                key={href}
                href={href}
                style={{ color: '#5A5A7A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#A0A0C0'}
                onMouseLeave={e => e.target.style.color = '#5A5A7A'}
              >
                {['Inicio', 'Nosotros', 'Proyectos', 'Equipo', 'Contacto'][i]}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:inge.luisgarza@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#4F9EF0',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span>✉</span> inge.luisgarza@gmail.com
          </a>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{ color: '#2E2E4A', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} NotCore. Todos los derechos reservados.
          </span>
          <span style={{
            fontSize: '0.75rem',
            color: '#2E2E4A',
            background: 'rgba(155,111,232,0.08)',
            border: '1px solid rgba(155,111,232,0.15)',
            padding: '0.2rem 0.65rem',
            borderRadius: '999px',
          }}>
            v{version}
          </span>
        </div>
      </div>
    </footer>
  )
}

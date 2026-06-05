export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1E1E40',
      padding: '2rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{
          fontWeight: 800,
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0, #5BCFCF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          NC NotCore
        </span>
        <span style={{ color: '#3A3A5A', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} NotCore. Todos los derechos reservados.
        </span>
        <a
          href="mailto:inge.luisgarza@gmail.com"
          style={{ color: '#4F9EF0', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}
        >
          inge.luisgarza@gmail.com
        </a>
      </div>
    </footer>
  )
}

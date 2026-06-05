import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(155,111,232,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%', width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(91,207,207,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem',
            border: '1px solid rgba(155,111,232,0.4)',
            borderRadius: '999px',
            marginBottom: '2rem',
            background: 'rgba(155,111,232,0.08)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5BCFCF', display: 'inline-block' }} />
          <span style={{ color: '#A0A0C0', fontSize: '0.8rem', fontWeight: 500 }}>Desarrollo · Automatización · Innovación</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ margin: '0 0 1.5rem', lineHeight: 1.1 }}
        >
          <span style={{ display: 'block', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#F0F0F0', letterSpacing: '-0.03em' }}>
            Construimos
          </span>
          <span className="gradient-text" style={{ display: 'block', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', paddingBottom: '0.15em' }}>
            el futuro digital
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#7A7A9A',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
          }}
        >
          Soluciones tecnológicas modernas: desde gestión de torneos hasta sistemas biométricos.
          Innovamos con precisión y pasión.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
              color: '#fff',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'transform 0.2s, opacity 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(155,111,232,0.4)',
              background: 'rgba(155,111,232,0.08)',
              color: '#C0C0E0',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'border-color 0.2s, background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#9B6FE8'; e.currentTarget.style.background = 'rgba(155,111,232,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(155,111,232,0.4)'; e.currentTarget.style.background = 'rgba(155,111,232,0.08)' }}
          >
            Contáctanos
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ color: '#3A3A5A', fontSize: '0.75rem', letterSpacing: '0.1em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '1px', height: '32px', background: 'linear-gradient(#9B6FE8, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

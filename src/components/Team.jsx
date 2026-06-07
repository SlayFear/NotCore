import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { label: 'Desarrollo de Software', color: '#9B6FE8' },
  { label: 'Infraestructura en la Nube', color: '#4F9EF0' },
  { label: 'Aplicaciones Web', color: '#5BCFCF' },
  { label: 'Automatización de Procesos', color: '#9B6FE8' },
  { label: 'Sistemas Biométricos', color: '#4F9EF0' },
  { label: 'Soluciones a Medida', color: '#5BCFCF' },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" style={{ padding: 'clamp(3rem, 10vw, 6rem) 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ color: '#5BCFCF', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            EQUIPO
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#F0F0F0', margin: '0 0 1rem', lineHeight: 1.2 }}>
            La mente detrás de{' '}
            <span className="gradient-text">NotCore</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ maxWidth: '600px' }}
        >
          <div
            className="gradient-border card-glow"
            style={{
              background: '#13132A',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0, #5BCFCF)',
                padding: '2px',
                flexShrink: 0,
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                  <img
                    src="/img/team/perfilLuis.jpg"
                    alt="Ing. Luis Garza"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '35% 30%',
                      transform: 'scale(2.7)',
                      transformOrigin: '58% 11%',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.3rem', fontWeight: 700, color: '#F0F0F0' }}>
                  Ing. Luis Garza
                </h3>
                <p style={{ margin: 0, color: '#7A7A9A', fontSize: '0.9rem' }}>
                  Fundador &amp; Desarrollador Full Stack
                </p>
                <p style={{ margin: '0.25rem 0 0', color: '#9B6FE8', fontSize: '0.8rem', fontWeight: 500 }}>
                  Desarrollo · Infraestructura · Innovación
                </p>
              </div>
            </div>

            {/* Bio */}
            <p style={{ color: '#7A7A9A', lineHeight: 1.75, fontSize: '0.95rem', margin: 0 }}>
              Ingeniero en Software con enfoque en construir productos digitales de alto impacto.
              Especializado en desarrollo de aplicaciones, infraestructura en la nube y automatización
              de procesos, con visión integral desde el diseño hasta la operación.
            </p>

            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.map(s => (
                <span
                  key={s.label}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '0.5rem',
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}40`,
                    color: s.color,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              ))}
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/luis-garzav/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '0.6rem',
                background: 'rgba(10, 102, 194, 0.12)',
                border: '1px solid rgba(10, 102, 194, 0.35)',
                color: '#4F9EF0',
                fontWeight: 600,
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                width: 'fit-content',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,102,194,0.22)'; e.currentTarget.style.borderColor = 'rgba(10,102,194,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,102,194,0.12)'; e.currentTarget.style.borderColor = 'rgba(10,102,194,0.35)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

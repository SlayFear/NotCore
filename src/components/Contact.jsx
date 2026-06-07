import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" style={{ padding: 'clamp(3rem, 10vw, 6rem) 1.5rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Glow bg */}
          <div style={{
            position: 'relative',
            padding: '4rem 2rem',
            borderRadius: '1.5rem',
            background: '#13132A',
            border: '1px solid #1E1E40',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(155,111,232,0.12) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            <p style={{ color: '#9B6FE8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              CONTACTO
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: '#F0F0F0', margin: '0 0 1rem', lineHeight: 1.2 }}>
              ¿Tienes un proyecto{' '}
              <span className="gradient-text">en mente?</span>
            </h2>
            <p style={{ color: '#7A7A9A', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
              Hablemos. Siempre estoy abierto a nuevas ideas, colaboraciones y retos técnicos interesantes.
            </p>

            <a
              href="mailto:inge.luisgarza@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
                color: '#fff',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                transition: 'transform 0.2s, opacity 0.2s',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>✉</span>
              <span style={{ whiteSpace: 'nowrap' }}>inge.luisgarza@gmail.com</span>
            </a>

            <p style={{ marginTop: '1.5rem', color: '#3A3A5A', fontSize: '0.8rem' }}>
              Respuesta en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '3', label: 'Productos en producción' },
  { value: '2+', label: 'Años desarrollando soluciones' },
  { value: '24h', label: 'Tiempo máximo de respuesta' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p style={{ color: '#9B6FE8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
          QUIÉNES SOMOS
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#F0F0F0', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          Tecnología que{' '}
          <span className="gradient-text">transforma</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginTop: '2rem' }}>
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p style={{ color: '#7A7A9A', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            En <strong style={{ color: '#C0C0E0' }}>NotCore</strong> creemos que la tecnología debe resolver problemas reales.
            Desarrollamos productos digitales que automatizan procesos, mejoran la operación
            de tu negocio y generan resultados tangibles desde el primer día.
          </p>
          <p style={{ color: '#7A7A9A', lineHeight: 1.8, fontSize: '1.05rem' }}>
            ¿Ya conoces alguno de nuestros productos? Podemos <strong style={{ color: '#5BCFCF' }}>implementarlo en tu empresa</strong> o
            desarrollar una solución completamente a la medida de tu operación.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="gradient-border card-glow"
              style={{
                background: '#13132A',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>
                {s.value}
              </span>
              <span style={{ color: '#A0A0C0', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="gradient-border card-glow"
          style={{ background: '#13132A', borderRadius: '1rem', padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{
              width: '38px', height: '38px', borderRadius: '0.6rem',
              background: 'linear-gradient(135deg, #9B6FE8, #4F9EF0)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', flexShrink: 0,
            }}>🎯</span>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#F0F0F0' }}>Misión</h3>
          </div>
          <p style={{ margin: 0, color: '#7A7A9A', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Crear soluciones tecnológicas que simplifiquen la operación de empresas y personas,
            convirtiendo problemas complejos en herramientas simples, confiables y accesibles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="gradient-border card-glow"
          style={{ background: '#13132A', borderRadius: '1rem', padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{
              width: '38px', height: '38px', borderRadius: '0.6rem',
              background: 'linear-gradient(135deg, #4F9EF0, #5BCFCF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', flexShrink: 0,
            }}>🚀</span>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#F0F0F0' }}>Visión</h3>
          </div>
          <p style={{ margin: 0, color: '#7A7A9A', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Ser la empresa de tecnología de referencia para negocios que buscan digitalizarse,
            con productos propios reconocidos por su calidad, impacto y facilidad de implementación.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

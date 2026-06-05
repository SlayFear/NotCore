import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    name: 'Checkmated.fun',
    url: 'https://checkmated.fun',
    tag: 'Producción',
    tagColor: '#22c55e',
    tagBg: 'rgba(34,197,94,0.1)',
    icon: '♟️',
    gradient: 'linear-gradient(135deg, rgba(155,111,232,0.15), rgba(79,158,240,0.08))',
    accentColor: '#9B6FE8',
    description:
      'Plataforma completa para la gestión de torneos de ajedrez. Organiza brackets, registra jugadores, lleva puntajes en tiempo real y genera reportes automáticos.',
    tech: ['Gestión de Torneos', 'Rankings en Vivo', 'Brackets Automáticos', 'Reportes'],
  },
  {
    name: 'Facely.cloud',
    url: 'https://facely.cloud',
    tag: 'Producción',
    tagColor: '#22c55e',
    tagBg: 'rgba(34,197,94,0.1)',
    icon: '🔐',
    gradient: 'linear-gradient(135deg, rgba(79,158,240,0.15), rgba(91,207,207,0.08))',
    accentColor: '#4F9EF0',
    description:
      'Sistema de checadores biométricos en la nube. Control de asistencia con reconocimiento facial, reportes en tiempo real y gestión de empleados desde cualquier dispositivo.',
    tech: ['Control de Asistencia', 'Reconocimiento Facial', 'Acceso desde Nube', 'Multi-sede'],
  },
  {
    name: 'Runachess.com',
    url: 'https://runachess.com',
    tag: 'Próximamente',
    tagColor: '#F59E0B',
    tagBg: 'rgba(245,158,11,0.1)',
    icon: '🎮',
    gradient: 'linear-gradient(135deg, rgba(91,207,207,0.15), rgba(155,111,232,0.08))',
    accentColor: '#5BCFCF',
    description:
      'Juego de ajedrez online con mecánicas únicas. Partidas en tiempo real, ranking global, modos especiales y una experiencia visual moderna e inmersiva.',
    tech: ['Juego Online', 'Multijugador en Tiempo Real', 'Ranking Global', 'Modos Especiales'],
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-glow gradient-border"
      style={{
        background: project.gradient,
        backgroundColor: '#13132A',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '2.5rem' }}>{project.icon}</span>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: project.tagColor,
          background: project.tagBg,
          padding: '0.25rem 0.75rem',
          borderRadius: '999px',
          border: `1px solid ${project.tagColor}40`,
        }}>
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.4rem', fontWeight: 700, color: '#F0F0F0' }}>
          {project.name}
        </h3>
        <p style={{ margin: 0, color: '#7A7A9A', lineHeight: 1.7, fontSize: '0.95rem' }}>
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.65rem',
              borderRadius: '0.4rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#8080A0',
              fontWeight: 500,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: project.accentColor,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
        onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
      >
        Visitar sitio <span>→</span>
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem' }}
      >
        <p style={{ color: '#4F9EF0', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
          NUESTROS PROYECTOS
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#F0F0F0', margin: '0 0 1rem', lineHeight: 1.2 }}>
          Productos que{' '}
          <span className="gradient-text">generan impacto</span>
        </h2>
        <p style={{ color: '#7A7A9A', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
          Cada proyecto nace de una necesidad real. Construimos con tecnología moderna y escalable.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

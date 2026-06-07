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
    logo: '/img/LogosExtras/CheckMatedLogoW.png',
    gradient: 'linear-gradient(135deg, rgba(155,111,232,0.15), rgba(79,158,240,0.08))',
    accentColor: '#9B6FE8',
    description:
      'La plataforma de ajedrez más completa de México. Sistema CMR dinámico con emparejamientos Swiss automáticos, inscripciones digitales y rankings en tiempo real. Ahorra 80% del tiempo en gestión de torneos.',
    tech: ['Sistema CMR', 'Swiss Automático', 'Inscripciones Digitales', 'Cero Errores'],
  },
  {
    name: 'Facely.cloud',
    url: 'https://facely.cloud',
    tag: 'Producción',
    tagColor: '#22c55e',
    tagBg: 'rgba(34,197,94,0.1)',
    logo: '/img/LogosExtras/FacelyLogoW.png',
    gradient: 'linear-gradient(135deg, rgba(79,158,240,0.15), rgba(91,207,207,0.08))',
    accentColor: '#4F9EF0',
    description:
      'Sistema de checadores biométricos en la nube. Control de asistencia con reconocimiento facial, reportes en tiempo real y gestión de empleados desde cualquier dispositivo.',
    tech: ['Control de Asistencia', 'Reconocimiento Facial', 'Acceso desde Nube', 'Multi-sede'],
  },
  {
    name: 'Runachess.com',
    url: null,
    tag: 'En desarrollo',
    tagColor: '#3B82F6',
    tagBg: 'rgba(59,130,246,0.1)',
    logo: '/img/LogosExtras/RunaChessLogo.png',
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
        borderRadius: '1.5rem',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        cursor: 'default',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header with tag */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '0.5rem',
      }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: project.tagColor,
          background: project.tagBg,
          padding: '0.3rem 0.75rem',
          borderRadius: '999px',
          border: `1.5px solid ${project.tagColor}60`,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          {project.tag}
        </span>
      </div>

      {/* Logo Container */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '1rem',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '120px',
          minWidth: '120px',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
        }}>
          <img 
            src={project.logo} 
            alt={project.name} 
            style={{ 
              height: '100px', 
              width: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 style={{ 
          margin: '0 0 0.75rem', 
          fontSize: '1.6rem', 
          fontWeight: 800, 
          color: '#F0F0F0',
          background: `linear-gradient(135deg, #F0F0F0, ${project.accentColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {project.name}
        </h3>
        <p style={{ 
          margin: 0, 
          color: '#8A8AA8', 
          lineHeight: 1.8, 
          fontSize: '1rem',
          fontWeight: 400,
        }}>
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: '0.8rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '0.6rem',
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid ${project.accentColor}30`,
              color: '#9A9ABF',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#FFF',
            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}dd)`,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.8rem',
            transition: 'all 0.3s ease',
            boxShadow: `0 8px 24px ${project.accentColor}40`,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = `0 12px 32px ${project.accentColor}60`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = `0 8px 24px ${project.accentColor}40`
          }}
        >
          Visitar sitio <span style={{ fontSize: '1.1rem' }}>→</span>
        </a>
      ) : (
        <span
          style={{
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#6A6A80',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'not-allowed',
          }}
        >
          Próximamente <span style={{ fontSize: '1.1rem' }}>→</span>
        </span>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: 'clamp(3rem, 10vw, 8rem) 1.5rem', maxWidth: '1300px', margin: '0 auto' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', gridAutoRows: 'minmax(480px, auto)' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

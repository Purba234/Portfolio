import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCalendar, FiMapPin } from 'react-icons/fi'

const hackathons = [
  {
    id: 1,
    title: 'Smart India Hackathon 2024 - Internal Hackathon',
    team: 'Team Byte Gurus',
    duration: 'Aug 2024 - Aug 2024',
    location: 'JIS College of Engineering, August 2024',
    description:
      'Developed a Smart Classroom Management System website using Laravel, focusing on efficient classroom operations, user management, and real-time data handling.',
    tech: ['Laravel', 'PHP', 'MySQL']
  },
  {
    id: 3,
    title: 'Diversion 2K25',
    team: 'Team ByteGurus',
    duration: 'Feb 2025 - Feb 2025',
    location: 'Institute of Engineering and Management, February 2025',
    description:
      'Designed and developed an AI Powered Financial advisory platform designed to help users make informed decisions regarding property investments and financial planning.',
    tech: ['AI', 'Python', 'JavaScript']
  },
  {
    id: 4,
    title: 'InnovoCon 2025',
    team: 'Organizer',
    duration: 'Feb 2025 - Feb 2025',
    location: 'JIS College of Engineering, February 2025',
    description:
      'I played a key role in organizing InnovoCon 2025, overseeing end-to-end planning and execution to ensure the event\'s overall success.',
    tech: ['Event Management', 'Leadership']
  },
  {
    id: 6,
    title: 'Hack4Bengal 4.0 - Virtual Hack',
    team: 'Team Pookies',
    duration: 'Apr 2025 - Apr 2025',
    location: 'Virtual Hackathon, April 2025',
    description:
      'We developed Fakebuster AI during Hack4Bengal 4.0 Virtual Hackathon, an innovative solution designed to detect and combat misinformation and fake content using advanced artificial intelligence techniques.',
    tech: ['AI', 'Python', 'JavaScript']
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export default function HackathonSection() {
  return (
    <div className="container" style={{ paddingTop: 16, paddingBottom: 32 }}>
      <h2 style={{ marginBottom: 16 }}>Hackathon Experiences</h2>
      <div className="projects-grid" style={{ marginTop: 0 }}>
        {hackathons.map((item) => (
          <motion.article
            key={item.id}
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              borderColor: 'rgba(96,165,250,0.35)',
              boxShadow: '0 12px 40px rgba(96,165,250,0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(109,40,217,0.35), rgba(96,165,250,0.28))',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
                aria-hidden="true"
              >
                <FiCode size={14} />
              </span>
              <span className="tag" style={{ fontSize: 11, padding: '4px 8px' }}>Hackathon</span>
            </div>

            <h3 style={{ marginTop: 12 }}>{item.title}</h3>
            <p style={{ margin: '4px 0 10px', color: 'var(--accent)', fontWeight: 600 }}>{item.team}</p>

            <p style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 0 6px', color: 'var(--muted)' }}>
              <FiCalendar size={14} aria-hidden="true" />
              <span>{item.duration}</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: 6, margin: '0 0 12px', color: 'var(--muted)' }}>
              <FiMapPin size={14} aria-hidden="true" style={{ marginTop: 2 }} />
              <span>{item.location}</span>
            </p>

            <p>{item.description}</p>

            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {item.tech.map((techTag) => (
                <span key={`${item.id}-${techTag}`} className="tag">
                  {techTag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

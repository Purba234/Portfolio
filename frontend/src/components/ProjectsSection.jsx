import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects as projectsData } from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

const tagContainer = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const tagItem = { hidden: { x: 8, opacity: 0 }, show: { x:0, opacity:1, transition:{duration:0.32} } }

function ProjectCard({p}){
  return (
    <motion.article className="card" variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once:true }} whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(96,72,255,0.12)', borderColor: 'rgba(150,130,255,0.3)' }}>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <motion.div variants={tagContainer} initial="hidden" animate="show" style={{marginTop:10,display:'flex',flexWrap:'wrap',gap:8}}>
        {p.tech?.map(t=> (
          <motion.span key={t} variants={tagItem} className="tag">{t}</motion.span>
        ))}
      </motion.div>
      <div style={{marginTop:10}}>
        {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>}
        {p.repoUrl && <a style={{marginLeft:8}} href={p.repoUrl} target="_blank" rel="noreferrer">Repo</a>}
      </div>
    </motion.article>
  )
}

export default function ProjectsSection(){
  const [filter, setFilter] = useState('')

  const filtered = filter ? projectsData.filter(p=> p.tech && p.tech.map(t=>t.toLowerCase()).includes(filter.toLowerCase())) : projectsData

  return (
    <div className="container" style={{paddingTop:32,paddingBottom:32}}>
      <h2>Projects</h2>
      <div style={{marginTop:8}}>
        <input placeholder="Filter by tech (e.g. React)" value={filter} onChange={e=>setFilter(e.target.value)} />
      </div>
      <div className="projects-grid" style={{marginTop:12}}>
        {filtered.length ? filtered.map(p=> <ProjectCard key={p.id} p={p} />) : <p>No projects found.</p>}
      </div>
    </div>
  )
}

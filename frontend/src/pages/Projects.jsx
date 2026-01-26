import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    axios.get('/api/projects')
      .then(r=>setProjects(r.data))
      .catch(()=>{
        // fallback sample
        setProjects([])
      })
  },[])

  return (
    <main className="container">
      <h1 data-aos="fade-up">Projects</h1>
      <div className="projects-grid">
        {projects.length ? projects.map(p=> <ProjectCard key={p.id} project={p} />) : <p data-aos="fade-up">No projects found — check backend or add sample data.</p>}
      </div>
    </main>
  )
}

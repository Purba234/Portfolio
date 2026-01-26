import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }){
  return (
    <motion.article className="card" whileHover={{ y: -6 }} data-aos="fade-up">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>{project.tech?.join(', ')}</small>
    </motion.article>
  )
}

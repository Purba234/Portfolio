import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="container">
      <section className="hero" data-aos="fade-up">
        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          Hi — I'm Purba
        </motion.h1>
        <p data-aos="fade-up" data-aos-delay="120">I build modern web apps with delightful motion.</p>
      </section>

      <section className="skills" data-aos="fade-right">
        <h2>Skills</h2>
        <div className="skill-list">
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Framer Motion</div>
        </div>
      </section>
    </main>
  )
}

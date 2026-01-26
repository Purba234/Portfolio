import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profileImg from '../assets/portfolio.jpeg'
import profileImgJpg from '../assets/portfolio.jpeg' 

const headline = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const subtitle = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: 'easeOut' } }
}

const description = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } }
}

const btnVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: 0.6 } }
}

export default function Hero(){
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="hero" style={{position:'relative',overflow:'hidden',paddingTop:80,paddingBottom:80}}>
      <motion.div 
        className="parallax-blob blob-1"
        style={{
          x: mousePos.x * 40,
          y: mousePos.y * 40
        }}
        aria-hidden
      />
      <motion.div 
        className="parallax-blob blob-2"
        style={{
          x: mousePos.x * -30,
          y: mousePos.y * -30
        }}
        aria-hidden
      />
      <motion.div 
        className="parallax-blob blob-3"
        style={{
          x: mousePos.x * 20,
          y: mousePos.y * 50
        }}
        aria-hidden
      />

      <div className="container" style={{position:'relative',zIndex:10}}>
        <div className="hero-grid">
          <div className="hero-text">
            <motion.h1 variants={headline} initial="hidden" animate="show">Purba Saha</motion.h1>
            <motion.h2 variants={subtitle} initial="hidden" animate="show" style={{fontSize:'1.5rem',color:'var(--accent)',marginTop:8,marginBottom:16}}>AI/ML & Data Science Enthusiast</motion.h2>
            <motion.p variants={description} initial="hidden" animate="show" style={{maxWidth:'600px',fontSize:'1.1rem',lineHeight:1.6}}>Transforming complex datasets into actionable insights through AI/ML expertise. Passionate about data science, predictive modeling, and building intelligent solutions.</motion.p>

            <motion.div variants={btnVariant} initial="hidden" animate="show" style={{marginTop:28,display:'flex',gap:12,flexWrap:'wrap'}}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cta" onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>View Projects</motion.button>
              <motion.a whileHover={{ scale: 1.05 }} href="/api/resume" download><motion.button whileTap={{ scale: 0.95 }} className="cta outline">Download Resume</motion.button></motion.a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cta outline" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Contact Me</motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{marginTop:12}}>
              <a href="mailto:purbasahasince2005@gmail.com" style={{color:'var(--accent)',textDecoration:'none',fontWeight:600,display:'inline-flex',alignItems:'center',gap:8}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5A2.5 2.5 0 015.5 3h13A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                purbasahasince2005@gmail.com
              </a>
            </motion.div>

            <motion.div variants={btnVariant} initial="hidden" animate="show" style={{marginTop:20,display:'flex',gap:16,flexWrap:'wrap'}}>
              <motion.a href="https://github.com/Purba234" target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{display:'inline-flex',alignItems:'center',gap:8,color:'var(--accent)',fontWeight:600,textDecoration:'none',padding:'10px 16px',borderRadius:8,border:'1.5px solid var(--accent)',background:'linear-gradient(135deg, rgba(96,165,250,0.1), rgba(109,40,217,0.05))',transition:'all 0.3s ease'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/purba-saha-b273a12b8/?isSelfProfile=true" target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{display:'inline-flex',alignItems:'center',gap:8,color:'var(--accent)',fontWeight:600,textDecoration:'none',padding:'10px 16px',borderRadius:8,border:'1.5px solid var(--accent)',background:'linear-gradient(135deg, rgba(96,165,250,0.1), rgba(109,40,217,0.05))',transition:'all 0.3s ease'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.667-2.237-.909 0-1.451.613-1.688 1.205-.087.216-.11.517-.11.819v5.782h-3.554s.048-9.379 0-10.359h3.554v1.468c.457-.704 1.274-1.707 3.101-1.707 2.267 0 3.968 1.482 3.968 4.668v5.93zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.958.77-1.708 1.915-1.708 1.144 0 1.915.75 1.915 1.708 0 .949-.771 1.707-1.915 1.707zm1.589 11.597H3.75V9.093h3.176v11.359zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hero-avatar-wrapper">
            <div className="hero-avatar">
              <img src={profileImg} alt="Purba Saha" onError={(e)=>{e.currentTarget.src = profileImgJpg}} />
              <div className="hero-avatar-overlay"/>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

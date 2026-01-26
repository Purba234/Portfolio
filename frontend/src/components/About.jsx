import React from 'react'
import { motion } from 'framer-motion'

const imgVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

import profileImg from '../assets/portfolio.jpeg'
import profileImgJpg from '../assets/portfolio.jpeg' 

export default function About(){
  return (
    <div className="container about" style={{paddingTop:48,paddingBottom:48}}>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About Me</motion.h2>
      
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:32,marginTop:24,alignItems:'center'}}>
        <motion.div variants={imgVariants} initial="hidden" whileInView="show" viewport={{ once:true }} className="about-avatar-wrapper">
          <div className="about-avatar">
            <img src={profileImg} alt="Purba Saha" onError={(e)=>{e.currentTarget.src = profileImgJpg}} className="about-avatar-img"/>
            <div className="about-avatar-overlay"/>
          </div>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" whileInView="show" viewport={{ once:true }}>
          <h3 style={{fontSize:'1.5rem',marginTop:0,marginBottom:12,color:'var(--accent)'}}>Purba Saha</h3>
          <p style={{fontSize:'1rem',lineHeight:1.7,marginBottom:16}}>
            A passionate and results-driven <strong>Computer Science Engineering student</strong> specializing in <strong>AI/ML & Data Science</strong> at JIS College of Engineering. I transform complex datasets into actionable insights through data-driven problem-solving and innovative analytical approaches.
          </p>
          
          <div style={{background:'linear-gradient(135deg, rgba(96,165,250,0.1), rgba(109,40,217,0.05))',padding:16,borderRadius:12,marginBottom:16,border:'1px solid rgba(96,165,250,0.1)'}}>
            <h4 style={{marginTop:0,marginBottom:12,color:'var(--accent)'}}>Quick Facts</h4>
            <ul style={{margin:0,paddingLeft:20}}>
              <li><strong>Education:</strong> B.Tech in Computer Science, JIS College of Engineering</li>
              <li><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</li>
              <li><strong>Expertise:</strong> Python, SQL, Data Science, Predictive Modeling</li>
              <li><strong>Status:</strong> Open for internships & full-time opportunities</li>
            </ul>
          </div>

          <p style={{fontSize:'0.95rem',color:'var(--muted)',marginBottom:16,fontStyle:'italic'}}>
            With hands-on experience in data manipulation, analysis, and model development, I'm committed to leveraging AI/ML to solve real-world problems and drive business value.
          </p>

          <motion.div variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once:true }} style={{marginTop:24,padding:16,borderRadius:12,border:'1px solid rgba(96,165,250,0.06)',background:'linear-gradient(135deg, rgba(96,165,250,0.02), rgba(109,40,217,0.01))'}}>
            <h4 style={{marginTop:0,marginBottom:8,color:'var(--accent)'}}>Experience</h4>
            <div>
              <strong>Data Visualization Analyst (Virtual) — Tata Consultancy Services via Forage (Jan 2026)</strong>
              <ul style={{margin:8,paddingLeft:20}}>
                <li>Designed interactive data visualizations and dashboards for executive leadership, enabling data-driven decision making for business insights</li>
                <li>Prepared strategic questions and conducted data analysis presentations for C-level stakeholders, demonstrating strong business acumen</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:16,marginTop:32}}>
        <motion.div variants={cardVariants} style={{padding:20,borderRadius:14,border:'1px solid rgba(96,165,250,0.2)',background:'linear-gradient(135deg, rgba(96,165,250,0.08), rgba(109,40,217,0.03))',textAlign:'center'}}>
          <div style={{fontSize:'2.5rem',marginBottom:8}}>📊</div>
          <h4 style={{marginTop:0,color:'var(--accent)'}}>Data Science</h4>
          <p style={{margin:0,fontSize:'0.9rem',color:'var(--muted)'}}>Analytics & Insights</p>
        </motion.div>

        <motion.div variants={cardVariants} style={{padding:20,borderRadius:14,border:'1px solid rgba(96,165,250,0.2)',background:'linear-gradient(135deg, rgba(96,165,250,0.08), rgba(109,40,217,0.03))',textAlign:'center'}}>
          <div style={{fontSize:'2.5rem',marginBottom:8}}>🤖</div>
          <h4 style={{marginTop:0,color:'var(--accent)'}}>AI/ML</h4>
          <p style={{margin:0,fontSize:'0.9rem',color:'var(--muted)'}}>Predictive Models</p>
        </motion.div>

        <motion.div variants={cardVariants} style={{padding:20,borderRadius:14,border:'1px solid rgba(96,165,250,0.2)',background:'linear-gradient(135deg, rgba(96,165,250,0.08), rgba(109,40,217,0.03))',textAlign:'center'}}>
          <div style={{fontSize:'2.5rem',marginBottom:8}}>💻</div>
          <h4 style={{marginTop:0,color:'var(--accent)'}}>Programming</h4>
          <p style={{margin:0,fontSize:'0.9rem',color:'var(--muted)'}}>Python & Web</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

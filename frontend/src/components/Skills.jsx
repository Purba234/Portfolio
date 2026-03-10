import React from 'react'
import { motion } from 'framer-motion'
import { skills as skillsData } from '../data/skills'
import { 
  SiPython, SiMysql, SiPostgresql, SiPandas, SiNumpy, SiScikitlearn, SiReact, SiHtml5, SiCss3, SiGithub, SiJavascript, SiGit
} from 'react-icons/si'
import { FaDatabase, FaChartBar, FaChartLine, FaCode } from 'react-icons/fa'

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const skillHover = { 
  scale: 1.1, 
  boxShadow: '0 12px 36px rgba(96,165,250,0.3)',
  background: 'linear-gradient(135deg, rgba(109,40,217,0.3), rgba(96,165,250,0.2))'
}

// Icon mapping for skills (components)
const skillIcons = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'SQL': FaDatabase,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Scikit-learn': SiScikitlearn,
  'Matplotlib': FaChartBar,
  'React.js': SiReact,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Git': SiGit,
  'GitHub': SiGithub,
  'VS Code': FaCode,
  'Power BI': FaChartLine
}

export default function Skills(){
  return (
    <div className="container" style={{paddingTop:48,paddingBottom:48}}>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills & Expertise</motion.h2>
      
      {Object.keys(skillsData).length === 0 && <p style={{marginTop:16}}>No skills found.</p>}
      
      <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:32,marginTop:24}}>
        {Object.entries(skillsData).map(([group, list], groupIdx)=> (
          <motion.div key={group} variants={groupVariants} style={{padding:24,borderRadius:16,border:'1px solid rgba(96,165,250,0.2)',background:'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(96,165,250,0.03))'}}>
            <h4 style={{fontSize:'1.2rem',marginTop:0,marginBottom:16,color:'var(--accent)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px'}}>{group}</h4>
            <motion.div variants={containerVariants} initial="hidden" animate="show" style={{display:'flex',flexWrap:'wrap',gap:10}}>
              {list.map((skill, idx)=> {
                const Icon = skillIcons[skill];
                return (
                <motion.button 
                  key={`${group}-${skill}`} 
                  className="skill-button" 
                  variants={skillVariants}
                  whileHover={skillHover}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding:'12px 16px',
                    borderRadius:'10px',
                    border:'1.5px solid var(--accent)',
                    background:'linear-gradient(135deg, rgba(96,165,250,0.1), rgba(109,40,217,0.05))',
                    color:'var(--accent)',
                    fontWeight:'600',
                    fontSize:'0.95rem',
                    transition:'all 0.3s ease',
                    boxShadow:'0 4px 15px rgba(96,165,250,0.1)',
                    cursor:'pointer',
                    display:'flex',
                    alignItems:'center',
                    gap:'8px'
                  }}
                >
                  {Icon && <span style={{fontSize:'1.25rem', display:'inline-flex', alignItems:'center'}}><Icon /></span>}
                  {skill}
                </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

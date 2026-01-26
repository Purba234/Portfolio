import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiPython, SiMysql, SiPostgresql, SiPandas, SiNumpy, SiScikitlearn, SiReact, SiHtml5, SiCss3, SiGithub, SiJavascript, SiGit
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

// SVG logos (local assets)
import pythonLogo from '../assets/icons/python.svg'
import javascriptLogo from '../assets/icons/javascript.svg'
import sqlLogo from '../assets/icons/sql.svg'
import mysqlLogo from '../assets/icons/mysql.svg'
import postgresqlLogo from '../assets/icons/postgresql.svg'
import pandasLogo from '../assets/icons/pandas.svg'
import numpyLogo from '../assets/icons/numpy.svg'
import scikitlearnLogo from '../assets/icons/scikitlearn.svg'
import matplotlibLogo from '../assets/icons/matplotlib.svg'
import reactLogo from '../assets/icons/react.svg'
import html5Logo from '../assets/icons/html5.svg'
import css3Logo from '../assets/icons/css3.svg'
import gitLogo from '../assets/icons/git.svg'
import githubLogo from '../assets/icons/github.svg'
import vscodeLogo from '../assets/icons/vscode.svg'
import powerbiLogo from '../assets/icons/powerbi.svg'

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
  'React.js': SiReact,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Git': SiGit,
  'GitHub': SiGithub
}

// Prefer SVG logos when available
const skillLogos = {
  'Python': pythonLogo,
  'JavaScript': javascriptLogo,
  'SQL': sqlLogo,
  'MySQL': mysqlLogo,
  'PostgreSQL': postgresqlLogo,
  'Pandas': pandasLogo,
  'NumPy': numpyLogo,
  'Matplotlib': matplotlibLogo,
  'Scikit-learn': scikitlearnLogo,
  'React.js': reactLogo,
  'HTML': html5Logo,
  'CSS': css3Logo,
  'Git': gitLogo,
  'GitHub': githubLogo,
  'VS Code': vscodeLogo,
  'Power BI': powerbiLogo
}

export default function Skills(){
  const [skills, setSkills] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('/api/skills')
      .then(r=>r.json())
      .then(data => {
        setSkills(data)
        setLoading(false)
      })
      .catch(()=>{
        setSkills({})
        setLoading(false)
      })
  },[])

  return (
    <div className="container" style={{paddingTop:48,paddingBottom:48}}>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Skills & Expertise</motion.h2>
      
      {loading && <p style={{marginTop:16}}>Loading skills...</p>}
      
      {!loading && Object.keys(skills).length === 0 && <p style={{marginTop:16}}>No skills found.</p>}
      
      <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:32,marginTop:24}}>
        {Object.entries(skills).map(([group, list], groupIdx)=> (
          <motion.div key={group} variants={groupVariants} style={{padding:24,borderRadius:16,border:'1px solid rgba(96,165,250,0.2)',background:'linear-gradient(135deg, rgba(109,40,217,0.08), rgba(96,165,250,0.03))'}}>
            <h4 style={{fontSize:'1.2rem',marginTop:0,marginBottom:16,color:'var(--accent)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.5px'}}>{group}</h4>
            <motion.div variants={containerVariants} initial="hidden" animate="show" style={{display:'flex',flexWrap:'wrap',gap:10}}>
              {list.map((skill, idx)=> {
                const Icon = skillIcons[skill];
                const Logo = skillLogos[skill];
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
                  <span style={{fontSize:'1.25rem', display:'inline-flex', alignItems:'center'}}>
                    {Logo ? <img src={Logo} alt={`${skill} logo`} style={{width:20,height:20}} /> : Icon ? <Icon /> : <span style={{fontSize:'1.3rem'}}>💡</span>}
                  </span>
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

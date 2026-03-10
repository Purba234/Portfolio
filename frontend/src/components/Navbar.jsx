import React from 'react'
import './navbar.css'
import ThemeToggle from './ThemeToggle'

function scrollTo(id){
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({behavior:'smooth'})
}

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="logo">MyPortfolio</div>
      <div className="links">
        <button onClick={()=>scrollTo('home')}>Home</button>
        <button onClick={()=>scrollTo('about')}>About</button>
        <button onClick={()=>scrollTo('skills')}>Skills</button>
        <button onClick={()=>scrollTo('projects')}>Projects</button>
        <button onClick={()=>scrollTo('hackathons')}>Hackathons</button>
        <button onClick={()=>scrollTo('contact')}>Contact</button>
        <a className="resume" href="/api/resume" download style={{marginLeft:8}}>Resume</a>
        <ThemeToggle />
      </div>
    </nav>
  )
}

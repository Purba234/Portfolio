import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import HackathonSection from './components/HackathonSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="hackathons"><HackathonSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  )
}

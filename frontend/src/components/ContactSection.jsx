import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import successAnim from '../assets/lottie-success.json'
import errorAnim from '../assets/lottie-error.json'

const formVariants = { hidden: { opacity:0, y:12 }, show: { opacity:1, y:0, transition:{ duration:0.5 } } }

export default function ContactSection(){
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name:'', email:'', subject:'', message:'' })
        setTimeout(() => setStatus(null), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 3000)
      }
    }catch(err){
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <div className="container" style={{paddingTop:32,paddingBottom:32}}>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Get In Touch</motion.h2>
      <motion.form className="contact-form" variants={formVariants} initial="hidden" whileInView="show" viewport={{once:true}} onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your email" required />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required rows={4} />
        <motion.button whileTap={{ scale: 0.96 }} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {status === 'sent' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            style={{marginTop:20,display:'flex',alignItems:'center',gap:12}}
          >
            {successAnim ? (
              <Lottie animationData={successAnim} loop={false} style={{width:60,height:60}} />
            ) : null}
            <p style={{color:'#4ade80',margin:0}}>Message sent successfully! I'll get back to you soon.</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            style={{marginTop:20,display:'flex',alignItems:'center',gap:12}}
          >
            {errorAnim ? (
              <Lottie animationData={errorAnim} loop={false} style={{width:60,height:60}} />
            ) : null}
            <p style={{color:'#ef4444',margin:0}}>Failed to send. Please check your input or try again.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

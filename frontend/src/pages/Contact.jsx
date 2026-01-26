import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      await axios.post('/api/contact', form)
      setStatus('sent')
      setForm({ name:'', email:'', message:'' })
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <main className="container">
      <h1 data-aos="fade-up">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="80">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
      {status === 'sending' && <p>Sending...</p>}
      {status === 'sent' && <p>Thanks — message sent.</p>}
      {status === 'error' && <p>Failed to send. Check the backend.</p>}
    </main>
  )
}

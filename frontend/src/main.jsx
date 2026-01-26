import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global-new.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { ThemeProvider } from './context/ThemeContext'

AOS.init({ duration: 800, once: true })

// Temporary debug logs: remove after issue is resolved
console.log('main.jsx loaded')

try {
  const rootEl = document.getElementById('root')
  if (!rootEl) console.error('Root element not found')
  console.log('Attempting to mount App...')
  createRoot(rootEl).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
  console.log('App mounted successfully')
} catch (err) {
  console.error('Error mounting App:', err)
}




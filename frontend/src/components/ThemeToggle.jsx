import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'

const sunVariants = {
  initial: { rotate: -180, opacity: 0, scale: 0 },
  sun: { rotate: 0, opacity: 1, scale: 1 },
  exit: { rotate: 180, opacity: 0, scale: 0 }
}

const moonVariants = {
  initial: { rotate: 180, opacity: 0, scale: 0 },
  moon: { rotate: 0, opacity: 1, scale: 1 },
  exit: { rotate: -180, opacity: 0, scale: 0 }
}

export default function ThemeToggle(){
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <motion.button 
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {theme === 'dark' ? (
        <motion.span
          key="sun"
          variants={sunVariants}
          initial="initial"
          animate="sun"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ display: 'inline-block' }}
        >
          ☀️
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          variants={moonVariants}
          initial="initial"
          animate="moon"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ display: 'inline-block' }}
        >
          🌙
        </motion.span>
      )}
    </motion.button>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold text-glow"
          whileHover={{ scale: 1.1 }}
        >
          Sundila Mujeed
        </motion.div>

        {/* Links */}
        <div className="space-x-6 text-sm font-medium text-gray-200">
          {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-accent relative group"
              whileHover={{ scale: 1.05 }}
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <a
            href="/SundilakhanCV.pdf"
            download
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-glow text-black font-semibold shadow-lg hover:shadow-accent/50"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function Hero(){
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-glow/40 rounded-full blur-3xl animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10 px-6">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Sundila Mujeed
          </h1>

          <div className="text-xl text-accent font-mono mb-6">
            <Typewriter
              options={{
                strings: [
                  "Innovative Python Developer",
                  "Backend Engineer",
                  "Code. Automate. Create."
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="max-w-md text-gray-300 mb-6">
            Motivated software engineering student with hands-on experience at 10Pearls. Skilled in Spring Boot, React, and database management. Passionate about building impactful web apps and continuously learning emerging technologies.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/SundilakhanCV.pdf"
              download
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-glow text-black font-semibold shadow-lg hover:shadow-accent/50"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-accent/50 hover:bg-accent/20 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-xl">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-accent to-glow flex items-center justify-center text-3xl font-bold text-black mb-4">
              SM
            </div>
            <div className="text-lg font-semibold">Sundila Mujeed</div>
            <div className="text-sm opacity-80">Software Engineer</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

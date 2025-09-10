import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Smart Contact Management",
    desc: "Full-stack contact manager built with Spring Boot (backend) and React (frontend). Features JWT authentication, image upload, and full CRUD operations.",
    github: "https://github.com/sundilakhan/SmartContactManagementApplication",
    live: ""
  },
  {
    title: "Ramadan Special Website",
    desc: "Responsive website designed for Ramadan, built with HTML, CSS, and JavaScript. Features a clean UI and spiritual resources. Deployed live.",
    github: "https://lnkd.in/dwrGDJ5A",
    live: "https://lnkd.in/dwrGDJ5A"
  },
  {
    title: "🌍 Weather Notifier",
    desc: "A Python app that fetches real-time weather data using OpenWeatherMap API and displays it via system notifications. A simple yet powerful automation utility.",
    github: "https://lnkd.in/dRssDX8T",
    live: ""
  },
  {
    title: "🕒 Daily Reminder System",
    desc: "Python script to notify you about hydration, study time, breaks, or any custom message — at your chosen interval. Lightweight, beginner-friendly, and useful for productivity.",
    github: "https://lnkd.in/dSjznXVW",
    live: ""
  },
  {
    title: "🤖 CodeSage – AI Coding Assistant",
    desc: "An AI chatbot built with Python (Flask backend) and HTML/CSS/JavaScript frontend. Helps users with coding queries in real-time. Supports basic command recognition for Python queries. Deployed on GitHub Pages.",
    github: "https://lnkd.in/dVUBQuxh",
    live: ""
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-16 relative">
      <h2 className="text-3xl font-bold glow mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-accent/50 transition relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-glow text-black font-medium shadow-md hover:shadow-accent/50 transition"
                >
                  GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-accent/50 text-gray-200 hover:bg-accent/20 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

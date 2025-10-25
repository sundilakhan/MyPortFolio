import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechStack from './components/TechStack'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      {/* 🌌 Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-glow/20 opacity-50"></div>

      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiMysql, SiJavascript } from 'react-icons/si'

const techIcons = [
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaGitAlt />, name: 'Git' },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-16">
      <h2 className="text-3xl font-bold glow text-center mb-10">💻 Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {techIcons.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-5xl md:text-6xl text-accent hover:text-glow transition-all cursor-pointer"
            title={t.name}
          >
            {t.icon}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

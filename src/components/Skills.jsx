import React from 'react'

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 65 },
  { name: 'React', level: 50 },
  { name: 'MySQL / MongoDB', level: 85 },
  { name: 'HTML / CSS / JS', level: 80 },
  { name: 'Python', level: 75 },
]

export default function Skills(){
  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-semibold glow">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map(s => (
          <div key={s.name} className="p-4 card-dark rounded-lg">
            <div className="flex justify-between items-center">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm opacity-70">{s.level}%</div>
            </div>
            <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div style={{width: `${s.level}%`}} className="h-2 bg-gradient-to-r from-glow to-accent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

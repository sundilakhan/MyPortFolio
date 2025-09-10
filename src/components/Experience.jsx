import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="py-10">
      <h2 className="text-2xl font-semibold glow">Experience & Education</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-dark p-4 rounded-lg">
          <div className="font-semibold">10Pearls — Shine Internship (2024)</div>
          <div className="mt-2 text-sm opacity-80">
            Java Developer Intern — Worked on Spring Boot, HTML/CSS, JavaScript. 
            Created responsive Smart Contact Website and full-stack components.
          </div>
        </div>
        <div className="card-dark p-4 rounded-lg">
          <div className="font-semibold">University of Central Punjab — B.S. Software Engineering (2022-2026)</div>
          <div className="mt-2 text-sm opacity-80">CGPA: 3.84/4.0</div>
        </div>
      </div>
    </section>
  )
}

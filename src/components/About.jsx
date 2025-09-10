import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-10">
      <h2 className="text-2xl font-semibold glow">About Me</h2>
      <div className="mt-4 card-dark p-6 rounded-xl">
        <p className="opacity-80">
          Motivated Software Engineering student with hands-on experience as an intern at 10Pearls.
          Skilled in Java, Spring Boot, React.js, and JavaScript with a strong focus on building responsive
          web applications. Passionate about full-stack development and continuously learning new technologies.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-800 rounded-lg">
            <div className="text-sm opacity-70">Location</div>
            <div className="font-medium">Lahore, Pakistan</div>
          </div>
          <div className="p-4 border border-gray-800 rounded-lg">
            <div className="text-sm opacity-70">Email</div>
            <div className="font-medium">ksundila@gmail.com</div>
          </div>
          <div className="p-4 border border-gray-800 rounded-lg">
            <div className="text-sm opacity-70">LinkedIn</div>
            <div className="font-medium">
              <a href="https://www.linkedin.com/in/sundila-khan-2784a3264" target="_blank" rel="noreferrer">
                linkedin.com/in/sundila-khan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

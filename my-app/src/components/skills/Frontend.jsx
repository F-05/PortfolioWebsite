import React from 'react'

const frontendSkills = [
  {
    name: "HTML",
    level: "Structured semantic layouts for clear and accessible interfaces",
  },
  {
    name: "CSS",
    level: "Responsive styling and polished visual presentation",
  },
  {
    name: "JavaScript",
    level: "Interactive frontend logic and core web development fundamentals",
  },
  {
    name: "React",
    level: "Built responsive interfaces, reusable UI components, and API-connected frontend features",
  },
  {
    name: "Vite",
    level: "Streamlined frontend development and fast local build workflow",
  },
  {
    name: "React Router",
    level: "Implemented client-side routing for seamless navigation",
  },
]

const frontendStrengths = [
  "Build clean, responsive interfaces across devices",
  "Create reusable React components with maintainable structure",
  "Focus on usability and practical design decisions",
]

const Frontend = () => {
  return (
    <article className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>
      <p className="skills__description">
        I create responsive, user-focused interfaces with React, with a strong focus on clarity,
        usability, and maintainable component structure. I enjoy turning ideas into
        polished web experiences that feel intuitive, seamless and easy for users to navigate.
      </p>

      <div className="skills__box">
        <div className="skills__group">
          <h4 className="skills__group-title">Core toolkit</h4>
          {frontendSkills.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <i className='bx bx-badge-check'></i>

              <div>
                <h5 className="skills__name">{skill.name}</h5>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          <h4 className="skills__group-title">What I bring</h4>
          {frontendStrengths.map((strength) => (
            <div className="skills__data skills__data--feature" key={strength}>
              <i className='bx bx-right-arrow-alt'></i>
              <p className="skills__feature-text">{strength}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Frontend

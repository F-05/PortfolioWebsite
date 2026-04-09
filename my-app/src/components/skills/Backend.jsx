import React from 'react'

const backendSkills = [
  {
    name: "Python",
    level: "Build backend logic, handled data processing, and supported application workflows",
  },
  {
    name: "Java",
    level: "Strong foundation in object-oriented development and design patterns",
  },
  {
    name: "SQL",
    level: "Queried, managed, and worked with structured relational data",
  },
  {
    name: "C",
    level: "Developed core programming fundamentals",
  },
  {
    name: "FastAPI / Flask / Django REST Framework",
    level: "Built backend applications, structured APIs, and practical web services for full-stack projects"
  },
  {
    name: "Git",
    level: "Managed version control and collaborated effectively in team-based development",
  },
]

const backendStrengths = [
  "Comfortable working through logic-heavy problems with a structured engineering mindset.",
  "Able to connect front-end experiences with back-end logic and data-driven workflows.",
  "Bring a learner's mindset to new tools, with experience built through projects, internships, and hackathons.",
]

const Backend = () => {
  return (
    <article className="skills__content">
      <h3 className="skills__title">Backend Foundations</h3>
      <p className="skills__description">
        I bring solid programming foundations and a full-stack mindset, with experience building application logic, 
        working with structured data, and developing reliable, practical software solutions. I enjoy solving logic-heavy 
        problems with a structured engineering approach.
      </p>

      <div className="skills__box">
        <div className="skills__group">
          <h4 className="skills__group-title">Core toolkit</h4>
          {backendSkills.map((skill) => (
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
          <h4 className="skills__group-title">Why it matters</h4>
          {backendStrengths.map((strength) => (
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

export default Backend

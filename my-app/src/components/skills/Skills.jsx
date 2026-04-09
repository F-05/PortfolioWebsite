import React from 'react'
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What I can bring to an engineering team</span>

        <p className="skills__intro container">
          My skill set combines front-end execution, strong software engineering
          fundamentals, and the ability to learn quickly in project-based
          environments. I aim to contribute as a developer who can build,
          collaborate, and keep improving fast.
        </p>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills

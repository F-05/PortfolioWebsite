import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">B. Software Engineering</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt'></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">Build 1 Personal Project</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support'></i>
            <h3 className="about__title"></h3>
            <span className="about__subtitle"></span>
        </div>
    </div>
  )
}

export default Info
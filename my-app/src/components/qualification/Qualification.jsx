import React, { useState } from 'react'
import "./qualification.css";

const educationData = [
    {
        title: "B. Software Engineering",
        subtitle: "University of Sydney",
        date: "2023 - Present"
    }
];

const experienceData = [
    {
        title: "Mathematics Tutor",
        subtitle: "Seriously Addictive Mathematics",
        date: "2023 - Present"
    },
    {
        title: "Consulting Intern",
        subtitle: "Jacaranda Flame Consulting",
        date: "June 2025 - August 2025"
    },
    {
        title: "President",
        subtitle: "Leo Club Jakarta Kairos Gracia",
        date: "Aug 2020 - July 2021"
    }
];

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const renderTimeline = (items) => (
        items.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === items.length - 1;

            return (
                <div className="qualification__data" key={`${item.title}-${item.subtitle}`}>
                    {isLeft ? (
                        <>
                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {!isLast && <span className="qualification__line"></span>}
                            </div>

                            <div></div>
                        </>
                    ) : (
                        <>
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {!isLast && <span className="qualification__line"></span>}
                            </div>

                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.subtitle}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            );
        })
    );

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {renderTimeline(educationData)}
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {renderTimeline(experienceData)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification

import React, { useRef, useState } from 'react';
import './projects.css';

const projectData = [
  {
    title: 'Developer Portfolio Website',
    description:
      'A personal portfolio built to present my background, skills, and growing project experience in a clean, responsive format.',
    highlights: [
      'Built with reusable React components and section-based navigation.',
      'Added dark mode, responsive layouts, and polished content structure.',
      'Integrated a direct contact flow and downloadable CV for recruiters.'
    ],
    stack: ['React', 'CSS', 'JavaScript', 'EmailJS', 'Responsive Design'],
    liveLabel: 'Portfolio',
    liveHref: '#home',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05'
  },
  {
    title: 'TrashScan: A Litter Detection App',
    description:
      'A hackathon project that uses machine learning to detect and classify trash from live video feeds into 3 categories in real time.',
    highlights: [
      'Trained and deployed a YOLOv8 model for real-time trash detection.',
      'Developed a user-friendly interface for real-time video analysis.',
      'Built a FastAPI backend to connect the interface with model inference.'
    ],
    stack: ['Python', 'FastAPI', 'React', 'JavaScript', 'CSS', 'YOLOv8'],
    liveLabel: 'Project',
    liveHref: 'https://trash-scan.vercel.app',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05/TrashScan'
  }

];

const buildGoals = [
  'A project that consumes a public API and visualizes live data.',
  'A real-time stock price tracker with WebSocket integration.',
  'A live chat app with user presence and typing indicators.',
  'A job application tracker with status updates and interview notes.',
];

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const touchStartX = useRef(null);
  const activeProject = projectData[activeProjectIndex];

  const showProject = (index) => {
    const totalProjects = projectData.length;
    setActiveProjectIndex((index + totalProjects) % totalProjects);
  };

  const showNextProject = () => {
    showProject(activeProjectIndex + 1);
  };

  const showPreviousProject = () => {
    showProject(activeProjectIndex - 1);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      showNextProject();
    } else if (swipeDistance < -swipeThreshold) {
      showPreviousProject();
    }

    touchStartX.current = null;
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Work that shows how I build</span>

      <div className="projects__container container">
        <div className="projects__grid">
          <div className="projects__carousel">
            <div className="projects__stage">
              <article
                className="projects__card"
                key={activeProject.title}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
              <div className="projects__content">
                <span className="projects__eyebrow">Featured Project</span>
                <div className="projects__heading">
                  <h3 className="projects__title">{activeProject.title}</h3>
                  <span className="projects__counter">
                    {activeProjectIndex + 1} / {projectData.length}
                  </span>
                </div>
                <p className="projects__description">{activeProject.description}</p>

                <ul className="projects__highlights">
                  {activeProject.highlights.map((highlight) => (
                    <li className="projects__highlight" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="projects__stack">
                  {activeProject.stack.map((item) => (
                    <span className="projects__tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  <a className="button button--flex" href={activeProject.liveHref}>
                    {activeProject.liveLabel}
                  </a>
                  <a
                    className="projects__link"
                    href={activeProject.codeHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {activeProject.codeLabel}
                  </a>
                </div>
              </div>
              </article>
            </div>

            <div className="projects__controls" aria-label="Project navigation">
              <button
                type="button"
                className="projects__control"
                onClick={showPreviousProject}
                aria-label="Show previous project"
              >
                Prev
              </button>
              <button
                type="button"
                className="projects__control projects__control--primary"
                onClick={showNextProject}
                aria-label="Show next project"
              >
                Next
              </button>
            </div>
          </div>

          <aside className="projects__next">
            <span className="projects__eyebrow">Next Steps</span>
            <h3 className="projects__title">Projects I am interested in working on</h3>
            <p className="projects__description">
              I am actively building my portfolio and looking for projects that will help me grow as a developer. 
              Here are some of the types of projects I am interested in working on next:
            </p>
            <ul className="projects__highlights">
              {buildGoals.map((goal) => (
                <li className="projects__highlight" key={goal}>
                  {goal}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;

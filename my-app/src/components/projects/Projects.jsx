import React, { useState } from 'react';
import './projects.css';
import portfolioPreview from '../../assets/portfolio-preview.png';
import trashScanPreview from '../../assets/trashscan-preview.png';

const projectData = [
  {
    title: 'Portfolio Website',
    image: portfolioPreview,
    description:
      'A personal portfolio built to present my background, skills, and growing project experience in a clean, responsive format.',
    highlights: [
      'Built with reusable React components and section-based navigation.',
      'Added dark mode, responsive layouts, and polished content structure.',
      'Integrated a direct contact flow and downloadable CV for recruiters.'
    ],
    stack: ['React', 'CSS', 'JavaScript', 'EmailJS', 'Responsive Design'],
    liveLabel: 'Preview',
    liveHref: '#home',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05'
  },
  {
    title: 'TrashScan: A Litter Detection App',
    image: trashScanPreview,
    description:
      'A hackathon project that uses machine learning to detect and classify litter from live video feeds into 3 categories in real time.',
    highlights: [
      'Trained and deployed a YOLOv8 model for real-time litter detection.',
      'Developed a user-friendly interface for real-time video analysis.',
      'Built a FastAPI backend to connect the interface with model inference.'
    ],
    stack: ['Python', 'FastAPI', 'React', 'JavaScript', 'CSS', 'YOLOv8'],
    liveLabel: 'Preview',
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

const renderHighlights = (items) =>
  items.map((item) => (
    <li className="projects__highlight" key={item}>
      {item}
    </li>
  ));

const renderStack = (items) =>
  items.map((item) => (
    <span className="projects__tag" key={item}>
      {item}
    </span>
  ));

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const activeProject = projectData[activeProjectIndex];
  const currentProjectLabel = `${activeProjectIndex + 1} / ${projectData.length}`;

  const showProject = (index) => {
    const totalProjects = projectData.length;
    setIsFlipped(false);
    setActiveProjectIndex((index + totalProjects) % totalProjects);
  };

  const showNextProject = () => {
    showProject(activeProjectIndex + 1);
  };

  const showPreviousProject = () => {
    showProject(activeProjectIndex - 1);
  };

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleResetFlip = () => {
    setIsFlipped(false);
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
                className={`projects__card ${isFlipped ? 'projects__card--flipped' : ''}`}
                key={activeProject.title}
              >
                <div className="projects__card-face projects__card-face--front">
                  <div className="projects__content">
                    <span className="projects__eyebrow">Featured Project</span>

                    <div className="projects__heading">
                      <h3 className="projects__title">{activeProject.title}</h3>
                      <span className="projects__counter">{currentProjectLabel}</span>
                    </div>

                    <p className="projects__description">{activeProject.description}</p>

                    <ul className="projects__highlights">
                      {renderHighlights(activeProject.highlights)}
                    </ul>

                    <div className="projects__stack">{renderStack(activeProject.stack)}</div>

                    <div className="projects__links">
                      <a
                        className="button button--flex projects__link-button"
                        href={activeProject.liveHref}
                      >
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

                      <button
                        type="button"
                        className="projects__flip-button"
                        onClick={handleFlip}
                      >
                        Click Me
                      </button>
                    </div>
                  </div>
                </div>

                <div className="projects__card-face projects__card-face--back">
                  <div className="projects__content">
                    <span className="projects__eyebrow">Project Preview</span>

                    <div className="projects__preview">
                      <div className="projects__preview-window">
                        <span className="projects__preview-dot"></span>
                        <span className="projects__preview-dot"></span>
                        <span className="projects__preview-dot"></span>
                      </div>

                      <div className="projects__preview-body">
                        <img
                          src={activeProject.image}
                          alt={`${activeProject.title} preview`}
                          className="projects__image"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="projects__flip-button projects__flip-button--secondary"
                      onClick={handleResetFlip}
                    >
                      Back to Details
                    </button>
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
              {renderHighlights(buildGoals)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import './projects.css';
import portfolioPreview from '../../assets/portfolio-preview.png';
import trashScanPreview from '../../assets/trashscan-preview.png';
import soundPrintPreview from '../../assets/soundprint-preview.png';

const projectData = [
  {
    title: 'TrashScan: A Litter Detection App',
    image: trashScanPreview,
    description:
      'A hackathon project that uses machine learning to detect and classify litter from live video feeds into 3 categories in real time.',
    highlights: [
      'Trained a YOLOv8 model on a custom litter dataset from Roboflow Universe and deployed it for real-time litter detection.',
      'Built a FastAPI backend to serve model inference the interface as an API - connecting a Python ML pipeline to a React frontend across separate deployments on Render and Vercel.',
      'Navigated the full ML-to-production pipeline across two phases - model training, API design and frontend integration during the hackathon, followed by deployment to Render and Vercel post-event.'
    ],
    stack: ['Python', 'FastAPI', 'React', 'JavaScript', 'YOLOv8', 'Vercel', 'Render'],
    liveLabel: 'Preview',
    liveHref: 'https://trash-scan.vercel.app',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05/TrashScan'
  },
  {
    title: 'Portfolio Website',
    image: portfolioPreview,
    description:
      'A personal portfolio built to present my background, skills, and growing project experience in a clean, responsive format.',
    highlights: [
      'Gained experience structuring a React app around reusable components and section-based navigation, keeping the codebase maintainable as content grew.',
      'Learned to handle cross-device consistency - implementing responsive layouts and dark mode without a UI library, using only CSS and React state.',
      'Integrated EmailJS to build a contact flow that works without a backend, and added a downloadable CV to reduce friction for recruiters.'
    ],
    stack: ['React', 'CSS', 'JavaScript', 'EmailJS', 'Vercel'],
    liveLabel: 'Preview',
    liveHref: '#home',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05'
  },
  {
    title: 'SoundPrint: Analyzing Your Listening Habits',
    image: soundPrintPreview,
    description:
      'A personal music analytics dashboard that connects to Spotify and visualises your listening identity - top tracks, genre breakdown, and habits over time.',
    highlights: [
      'Gained hands-on experience implementing OAuth 2.0 PKCE from scratch — understanding the full auth cycle from code generation to token refresh, without relying on an auth library',
      'Learned to architect a client-side app with security in mind — separating token storage by sensitivity, handling expiry edge cases, and protecting against CSRF with state validation',
      'Built a modular API layer that centralises error handling, token attachment, and rate-limit recovery — making every data endpoint in the app clean and consistent',
    ],
    stack: ['Vite', 'React', 'JavaScript', 'Recharts', 'D3', 'Spotify Web API', 'Vercel'],
    liveLabel: 'Ongoing',
    liveHref: '',
    codeLabel: 'Source',
    codeHref: 'https://github.com/F-05/SoundPrint'
  }
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

const renderLiveLink = ({ liveHref, liveLabel }) => {
  if (!liveHref) {
    return (
      <span className="button button--flex projects__link-button projects__link-button--disabled">
        {liveLabel}
      </span>
    );
  }

  return (
    <a
      className="button button--flex projects__link-button"
      href={liveHref}
      target="_blank"
      rel="noreferrer"
    >
      {liveLabel}
    </a>
  );
};

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectData[activeProjectIndex];
  const currentProjectLabel = `${activeProjectIndex + 1} / ${projectData.length}`;

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

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Work that shows how I build</span>

      <div className="projects__container container">
        <div className="projects__carousel">
          <div className="projects__stage">
            <article className="projects__card" key={activeProject.title}>
              <span className="projects__eyebrow">Featured Project</span>

              <div className="projects__heading">
                <h3 className="projects__title">{activeProject.title}</h3>
                <span className="projects__counter">{currentProjectLabel}</span>
              </div>

              <div className="projects__layout">
                <div className="projects__media">
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

                  <div className="projects__stack">{renderStack(activeProject.stack)}</div>

                  <div className="projects__links">
                    {renderLiveLink(activeProject)}

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

                <div className="projects__content">
                  <p className="projects__description">{activeProject.description}</p>

                  <ul className="projects__highlights">
                    {renderHighlights(activeProject.highlights)}
                  </ul>

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
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

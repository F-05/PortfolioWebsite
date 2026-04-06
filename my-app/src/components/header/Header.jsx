import React, { useEffect, useState } from 'react';
import "./header.css";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.png";

const Header = () => {
    /* ======= Toggle Menu ======= */
    const [Toggle, showMenu] = useState(false);

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
      const bodyClass = document.body.classList;
      if (darkMode) {
          bodyClass.add("dark-theme");
          localStorage.setItem("theme", "dark");
      } else {
          bodyClass.remove("dark-theme");
          localStorage.setItem("theme", "light");
      }
    }, [darkMode]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
      
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const navLink = document.querySelector(
                `.nav__menu a[href="#${entry.target.id}"]`
              );
              if (entry.isIntersecting) {
                navLink?.classList.add("active-link");
              } else {
                navLink?.classList.remove("active-link");
              }
            });
          },
          {
            root: null,
            rootMargin: "0px",
          threshold: 0.6,
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const header = document.querySelector(".header");
        if (!header) {
          return;
        }

        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Fideris</a>

                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <button
                                type="button"
                                className="nav__link nav__theme-toggle"
                                onClick={() => setDarkMode(!darkMode)}
                                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                            <img
                                src={darkMode ? sunIcon : moonIcon}
                                alt="Toggle Theme"
                                style={{
                                width: "24px",
                                height: "24px",
                                display: "block",
                                margin: "0 auto"
                                }}
                            />
                            </button>
                        </li>

                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link" onClick={() => showMenu(false)}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header

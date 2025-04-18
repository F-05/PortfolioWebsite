import React, { useEffect, useState } from 'react';
import "./header.css";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.png";

const Header = () => {
    /* ======= Toggle Menu ======= */
    const[Toggle, showMenu] = useState(false);
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

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Fideris</a>

                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#theme" className="nav__link active-link">
                                <img 
                                    src={darkMode ? sunIcon : moonIcon} 
                                    onClick={() => setDarkMode(!darkMode)}
                                    style={{ width: "24px", height: "24px", cursor: "pointer", marginLeft: "1rem", marginBottom: "0.5rem"}}
                                />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
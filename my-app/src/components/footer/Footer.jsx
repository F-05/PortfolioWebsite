import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Fideris Susanto</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/F-05" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/fideris-susanto-047864213/" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; FiderisSusanto. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer

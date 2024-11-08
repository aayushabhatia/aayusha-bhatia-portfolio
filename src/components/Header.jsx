import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header-top-fixed one-page-nav ${mobileToggle ? 'menu-open' : ''} ${scrolled ? 'fixed-header' : ''}`}>
      <div className="container">
        <div className="logo">
          <ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500}>
            <img src="/images/portfolioNameLogo.png" alt="Logo" />
          </ScrollLink>
        </div>
        <ul className="main-menu">
          <li><ScrollLink to="home" spy smooth offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
          <li><ScrollLink to="about" spy smooth offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About Me</ScrollLink></li>
          <li><ScrollLink to="education" spy smooth offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Education</ScrollLink></li>
          <li><ScrollLink to="skills" spy smooth offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Skills</ScrollLink></li>
          <li><ScrollLink to="projects" spy smooth offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Projects</ScrollLink></li>
        </ul>
        <div className="d-flex">
          <ScrollLink to="contactus" spy smooth offset={-80} duration={500} className="px-btn d-none d-lg-inline-flex">Connect with me</ScrollLink>
          <button className="toggler-menu d-lg-none" onClick={() => setMobileToggle(!mobileToggle)}>
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}

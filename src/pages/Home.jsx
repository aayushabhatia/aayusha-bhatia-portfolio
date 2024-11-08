import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
import HomePagdData from '../data/HomePagdData.json';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

export default function Home() {
  const {
    hero,
    socialBtns,
    about,
    education,
    skills,
    projects,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Education data={education} />
      <Skills data={skills} />
      <Projects data={projects} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}

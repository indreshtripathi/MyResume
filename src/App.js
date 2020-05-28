import React from 'react';
import './App.css';
import CandidateInfo from './components/CandidateInfo';
import Objective from './components/Objective';
import Skills from './components/Skills.js';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import resumeData from './resumeData';

function App() {

  return (
    <div className="App">

      <CandidateInfo info={resumeData.info} />
      <Objective objective={resumeData.objective} />
      <Skills skills={resumeData.skills} />
      <Projects projects={resumeData.projects} />
      <Experience roles={resumeData.roles} />
      <Education courses={resumeData.courses} />

    </div>
  );
}

export default App;

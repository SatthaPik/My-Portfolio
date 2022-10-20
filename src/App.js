import React, { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div data-aos='fade-up' className=''>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

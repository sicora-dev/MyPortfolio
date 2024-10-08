import React from 'react';
import './App.css';
import MainContent from './MainContent';
import Biography from './Biography';
import Projects from './Projects';
import Cv from './Cv';

function App({ currentSection, direction }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {currentSection === 1 && (
        <><MainContent id="section1" className={`transition-section ${direction === 'down' ? 'slide-in-down' : 'slide-in-up'}`}>
          <Biography />
        </MainContent></>
      )}

      {currentSection === 2 && (
        <MainContent id="section2" className={`transition-section ${direction === 'down' ? 'slide-in-down' : 'slide-in-up'}`}>
          <Projects />
        </MainContent>
      )}

      {currentSection === 3 && (
        <MainContent id="section3" className={`transition-section ${direction === 'down' ? 'slide-in-down' : 'slide-in-up'}`}>
          hola
        </MainContent>
      )}
    </div>
  );
}

export default App;
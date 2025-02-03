import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import '../styles.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Grace Lo's Portfolio</h1>
      </header>
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

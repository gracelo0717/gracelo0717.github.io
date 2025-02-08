import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';

const App = () => {
  return (
    <div className='landing-page'>
      <div className='landing-container'>
        <header className='landing-header'>
          <h1>Grace Lo</h1>
          <p>Software Engineer</p>
          <div className='buttons-container'>
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </header>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

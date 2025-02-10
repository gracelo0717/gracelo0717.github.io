import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
const profilePic = require('../assets/profile_pic.JPG');

const App = () => {
  return (
    <div className='landing-page'>
      <header className='landing-header'>
        <img src={profilePic} alt='Grace' className='profile-pic' />
        <h1>Grace Lo</h1>
        <p>Full Stack Developer</p>
        <div className='buttons-container'>
          <button>About</button>
          <button>Experience</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </header>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

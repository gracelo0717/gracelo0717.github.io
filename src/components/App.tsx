import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
import Navbar from '../components/Navbar';
const profilePic = require('../assets/profile_pic.jpg');

const App = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <header className='landing-header'>
        <img src={profilePic} alt='Grace' className='profile-pic' />
        <div>
          <h1>Grace Lo</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

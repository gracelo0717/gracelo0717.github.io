import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const profilePic = require('../assets/profile_pic.jpg');

const App = () => {
  return (
    <Router>
      <div className='landing-page'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='landing-header'>
                <img src={profilePic} alt='Grace' className='profile-pic' />
                <div>
                  <h1>Grace Lo</h1>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            }
          />
          <Route path='/aboutme' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

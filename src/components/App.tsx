import ReactDOM from 'react-dom/client';
import '../styles.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
const profilePic = require('../assets/profile_pic.jpg');
import { Element } from 'react-scroll';

const App = () => {
  return (
    <Router>
      <div className='landing-page'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='landing-header section' id='home'>
                <img src={profilePic} alt='Grace' className='profile-pic' />
                <h1>Grace Lo</h1>
                <p>Full Stack Developer</p>
                <h3>.</h3>
              </div>
            }
          />
          <Route path='/aboutme' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <div className='full-page'>
        <Element name='aboutme' className='section'>
          <About />
        </Element>

        <Element name='experience' className='section'>
          <Experience />
        </Element>

        <Element name='projects' className='section'>
          <Projects />
        </Element>

        <Element name='contact' className='section'>
          <Contact />
        </Element>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(<App />);

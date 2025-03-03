import ReactDOM from 'react-dom/client';
import '../styles.css';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { Element } from 'react-scroll';
import TypingEffect from './Typing';
import Socials from './Socials';

const App = () => {
  const sentence = 'FullStack Web Developer';
  const speed = 100;
  const resetDelay = 2000;

  return (
    <Router>
      <div className='landing-page'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='landing-header section' id='home'>
                <h1>
                  Hello, I'm <b>Grace Lo</b>.
                </h1>
                <TypingEffect
                  sentence={sentence}
                  speed={speed}
                  resetDelay={2000}
                />
                <div className='socials'>
                  <Socials />
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

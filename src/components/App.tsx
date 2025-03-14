import ReactDOM from 'react-dom/client';
import { Link } from 'react-scroll';
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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const App = () => {
  const sentence = 'FullStack Web Developer';
  const speed = 100;
  const resetDelay = 2000;

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
                <Link to='aboutme' smooth={true} duration={200}>
                  <button className='explore-section'>
                    <span
                      style={{
                        color: '#4e4e4e',
                        display: 'block',
                        fontSize: '15px',
                      }}
                    >
                      Explore
                    </span>
                    <div className='explore-btn'>
                      <ArrowDownwardIcon
                        sx={{
                          fontSize: '30px',
                          color: '#4e4e4e',
                        }}
                      />
                    </div>
                  </button>
                </Link>
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

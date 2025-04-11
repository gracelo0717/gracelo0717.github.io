import React from 'react';
import profilePic from '../assets/profile_pic.JPG';

const About = () => {
  return (
    <section id='aboutme'>
      <h2>About me</h2>
      <div className='about-container'>
        <div className='profile-container'>
          <img src={profilePic} alt='Grace' className='profile-pic' />
          <div className='profile-caption'>
            <p>
              I am always on a mission to "Learn, Build, Debug, and Repeat" -
              think Bob the Builder, but with code!
            </p>
          </div>
          <p>
            Hi again! I'm Grace, a passionate Full Stack Developer with a love
            for creating intuitive web applications. I specialize in building
            user-friendly experiences that people truly enjoy. My journey into
            tech didn’t come from a traditional computer science background, but
            rather from a genuine curiosity and drive to learn. When I'm not
            coding, you'll find me capturing memories through photos and vlogs
            or diving into Riot/Steam games.
          </p>
        </div>

        <div className='tech-stack'>
          <h3>Languages & Libraries</h3>
          <div className='tech-grid'>
            <div className='tech-icon' title='JavaScript'>
              <i className='devicon-javascript-plain colored'></i>
            </div>
            <div className='tech-icon' title='TypeScript'>
              <i className='devicon-typescript-plain colored'></i>
            </div>
            <div className='tech-icon' title='HTML5'>
              <i className='devicon-html5-plain colored'></i>
            </div>
            <div className='tech-icon' title='CSS3'>
              <i className='devicon-css3-plain colored'></i>
            </div>
            <div className='tech-icon' title='React'>
              <i className='devicon-react-original colored'></i>
            </div>
            <div className='tech-icon' title='Redux'>
              <i className='devicon-redux-original colored'></i>
            </div>
            <div className='tech-icon' title='Material UI'>
              <i className='devicon-materialui-plain colored'></i>
            </div>
          </div>
          <h3>Databases</h3>
          <div className='tech-grid'>
            <div className='tech-icon' title='PostgreSQL'>
              <i className='devicon-postgresql-plain colored'></i>
            </div>
            <div className='tech-icon' title='MongoDB'>
              <i className='devicon-mongodb-plain colored'></i>
            </div>
            <div className='tech-icon' title='SQLite3'>
              <i className='devicon-sqlite-plain colored'></i>
            </div>
          </div>
          <h3>Frameworks & Runtimes</h3>
          <div className='tech-grid'>
            <div className='tech-icon' title='Node.js'>
              <i className='devicon-nodejs-plain-wordmark colored'></i>
            </div>
            <div className='tech-icon' title='Express'>
              <i className='devicon-express-original colored'></i>
            </div>
          </div>
          <h3>Technologies</h3>
          <div className='tech-grid'>
            <div className='tech-icon' title='Docker'>
              <i className='devicon-docker-plain colored'></i>
            </div>
            <div className='tech-icon' title='D3.js'>
              <i className='devicon-d3js-plain colored'></i>
            </div>
            <div className='tech-icon' title='Git'>
              <i className='devicon-git-plain colored'></i>
            </div>
            <div className='tech-icon' title='Webpack'>
              <i className='devicon-webpack-plain colored'></i>
            </div>
            <div className='tech-icon' title='Vite'>
              <i className='devicon-vitejs-plain colored'></i>
            </div>
          </div>
          <h3>AWS Infrastructure</h3>
          <div className='tech-grid'>
            <div className='tech-icon' title='AWS'>
              <i className='devicon-amazonwebservices-plain-wordmark colored'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

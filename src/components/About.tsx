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

        <div className='tech-sections'>
          <div className='lang-framework'>
            <h3>Languages & Frameworks:</h3>
            <span className='tech'>JavaScript</span>
            <span className='separator'> | </span>
            <span className='tech'>TypeScript</span>
            <span className='separator'> | </span>
            <span className='tech'>HTML5</span>
            <span className='separator'> | </span>
            <span className='tech'>CSS</span>
            <span className='separator'> | </span>
            <span className='tech'>React</span>
            <span className='separator'> | </span>
            <span className='tech'>Redux</span>
            <span className='separator'> | </span>
            <span className='tech'>MUI</span>
            <span className='separator'> | </span>
            <span className='tech'>Node.js</span>
            <span className='separator'> | </span>
            <span className='tech'>Express</span>
            <span className='separator'> | </span>
            <span className='tech'>SQL</span>
            <span className='separator'> | </span>
            <span className='tech'>NoSQL</span>
          </div>

          <div className='technologies'>
            <h3>Technologies:</h3>
            <span className='tech'>Docker</span>
            <span className='separator'> | </span>
            <span className='tech'>WebSockets</span>
            <span className='separator'> | </span>
            <span className='tech'>WebRTC</span>
            <span className='separator'> | </span>
            <span className='tech'>D3.js</span>
            <span className='separator'> | </span>
            <span className='tech'>Chart.js</span>
            <span className='separator'> | </span>
            <span className='tech'>SQLite3</span>
            <span className='separator'> | </span>
            <span className='tech'>Git</span>
            <span className='separator'> | </span>
            <span className='tech'>Parcel</span>
            <span className='separator'> | </span>
            <span className='tech'>Webpack</span>
            <span className='separator'> | </span>
            <span className='tech'>Vite</span>
          </div>

          <div className='aws-infrastructure'>
            <h3>AWS Infrastructure:</h3>
            <span className='tech'>ECR</span>
            <span className='separator'> | </span>
            <span className='tech'>CloudWatch</span>
            <span className='separator'> | </span>
            <span className='tech'>ECS Fargate</span>
            <span className='separator'> | </span>
            <span className='tech'>IAM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

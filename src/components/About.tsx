import React from 'react';
const profilePic = require('../assets/profile_pic.jpg');

const About = () => {
  return (
    <section id='aboutme'>
      <h2>About me</h2>
      <div className='profile-container'>
        <img src={profilePic} alt='Grace' className='profile-pic' />
        <div className='profile-caption'>
          <p>
            I am always on a mission to "Learn, Build, Debug, and Repeat" -
            think Bob the Builder, but with code!
          </p>
        </div>
      </div>
      <p>
        Hi again! I'm Grace, a passionate Full Stack Developer with a love for
        creating intuitive web applications. I specialize in building
        user-friendly experiences that people truly enjoy. My journey into tech
        didn’t come from a traditional computer science background, but rather
        from a genuine curiosity and drive to learn. When I'm not coding, you'll
        find me capturing memories through photos and vlogs or diving into
        Riot/Steam games.
      </p>
    </section>
  );
};

export default About;

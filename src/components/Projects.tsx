import React, { useState } from 'react';
import chromeImg from '../assets/chrome.png';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Project Description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Project Description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '',
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <section id='projects'>
      <div className='tab-container'>
        <div className='tab-bar'>
          <div className='chrome-image-container'>
            <img src={chromeImg} alt='Chrome' className='chrome-image' />
          </div>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`tab ${activeTab === project.id ? 'active' : ''}`}
              onClick={() => handleTabClick(project.id)}
            >
              <span className='tab-label'>{project.name}</span>
            </div>
          ))}
          <div className='add-tab-button'>+</div>
        </div>
        <div className='tab-content'>
          {projects.map((project) =>
            activeTab === project.id ? (
              <div key={project.id} className='project-details'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='project-image'
                />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies Used: </strong>
                  {project.technologies.join(', ')}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

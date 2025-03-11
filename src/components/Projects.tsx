import React, { useState } from 'react';
import chromeImg from '../assets/chrome.png';
import futureProject from '../assets/future-project.jpeg';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

const initialProjects: Project[] = [
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
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [addTabDisabled, setAddTabDisabled] = useState<boolean>(false);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const handleAddTab = () => {
    if (addTabDisabled) return;
    const newProject: Project = {
      id: projects.length + 1,
      name: 'Future Projects',
      description: `Always on the lookout for exciting projects! Connect with me and I could help bring your ideas to life!`,
      technologies: ['TBD: Open to exploring new tools and tech'],
      image: futureProject,
    };
    setProjects([...projects, newProject]);
    setActiveTab(newProject.id);
    setAddTabDisabled(true);
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
          <button
            className='add-tab-button'
            onClick={handleAddTab}
            style={{
              cursor: addTabDisabled ? 'not-allowed' : 'pointer',
              opacity: addTabDisabled ? 0.5 : 1,
            }}
            disabled={addTabDisabled}
          >
            +
          </button>
        </div>
        <div className='tab-content'>
          {projects.map(
            (project) =>
              activeTab === project.id && (
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
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

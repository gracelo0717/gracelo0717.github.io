import React, { useState } from 'react';
import chromeImg from '../assets/chrome.png';
import futureProject from '../assets/future-project.jpeg';
import DeClustor from '../assets/DeClustor.gif';
import url from '../assets/url.png';
import syncify from '../assets/syncify.gif';

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
    name: 'DeClustor',
    description: `DeClustor is a user-friendly dashboard designed to streamline the management of AWS ECS environments. It offers a centralized interface to monitor multiple AWS accounts, track real-time metrics, and manage services across various ECS clusters. With customizable alert thresholds, detailed task and cluster metric graphs, and the ability to generate comprehensive reports, DeClustor simplifies and enhances the monitoring process.`,
    technologies: [
      'Javascript',
      'React',
      'Node',
      'Express',
      'SQLite3',
      'WebSocket',
      'Redis',
      'AWS',
      'DockerHub',
    ],
    image: DeClustor,
  },
  {
    id: 2,
    name: 'Syncify',
    description: `Syncify is a full-stack web application that allows users to effortlessly convert their Spotify playlists to YouTube and automatically generate corresponding playlists on the platform. It integrates Spotify and YouTube APIs to facilitate seamless playlist migration. With secure user authentication powered by Spotify and YouTube OAuth, users can easily log in and manage their playlists across both services. Syncify simplifies the process of syncing music libraries between platforms, ensuring a smooth and personalized listening experience.`,
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Node.js',
      'Spotify API',
      'YouTube API',
      'OAuth',
    ],
    image: syncify,
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
      technologies: ['TBD, open to exploring new tools and tech'],
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
          <div>
            <img src={url} alt='url' className='url-image' />
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

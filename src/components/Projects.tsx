import React from 'react';

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
  return (
    <section id='projects'>
      <div className='tab-bar'>
        {projects.map((project) => (
          <div key={project.id} className='tab'>
            <span className='tab-label'>{project.name}</span>
          </div>
        ))}
      </div>
      <div className='tab-content'>
        {projects.map((project) => (
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
        ))}
      </div>
    </section>
  );
};

export default Projects;

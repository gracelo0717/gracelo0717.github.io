import { useState } from 'react';
import chromeImg from '../assets/chrome.png';
import url from '../assets/url.png';
import loading from '../assets/loading.gif';
import DeClustor from '../assets/DeClustor.gif';
import touchgrass from '../assets/touchgrass.gif';
import syncify from '../assets/syncify.gif';
import taskify from '../assets/taskify.gif';
import webrtc from '../assets/webrtc.gif';
import clippynotes from '../assets/clippynotes.gif';
import jobhub from '../assets/jobhub.png';
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
    name: 'Projects',
    description: `I designed this section to resemble a Chrome browser. Explore my projects by clicking the tabs above!`,
    technologies: [],
    image: loading,
  },
  {
    id: 2,
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
    id: 3,
    name: 'TouchGrass',
    description: `TouchGrass is an interactive escape room game built with TypeScript and React, where players collaborate with the OpenAI API to receive dynamic room descriptions and solve puzzles. With a seamless mix of narrative and puzzle-solving, TouchGrass offers an exciting and unpredictable challenge, where every decision influences the adventure.`,
    technologies: [
      'OpenAI API',
      'JavaScript',
      'Typescript',
      'React',
      'Node',
      'Express',
      'HTML',
      'CSS',
      'Axios',
      'Vite',
    ],
    image: touchgrass,
  },
  {
    id: 4,
    name: 'Syncify',
    description: `Syncify is a full-stack web application that allows users to effortlessly convert their Spotify playlists to YouTube and automatically generate corresponding playlists on the platform. It integrates Spotify and YouTube APIs to facilitate seamless playlist migration. With secure user authentication powered by Spotify and YouTube OAuth, users can easily log in and manage their playlists across both services. Syncify simplifies the process of syncing music libraries between platforms, ensuring a smooth and personalized listening experience.`,
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Node',
      'Spotify API',
      'YouTube API',
      'OAuth',
    ],
    image: syncify,
  },
  {
    id: 5,
    name: 'Taskify',
    description: `Taskify is a user-friendly task management web app built with TypeScript and Lite Server, designed to help you stay organized and productive. Whether you're managing personal tasks or work projects, Taskify makes it easy to add, track, and complete tasks with just a few clicks. With features like task prioritization, checkboxes for completion, and a clear button to remove completed tasks, Taskify keeps your to-do list up-to-date and clutter-free.\n
    Upcoming features, including task categories, due dates, reminders, Web3 integration, and more, will take your productivity to the next level. Taskify makes task management effortless, so you can focus on what matters most. Come Taskify with me!`,
    technologies: ['JavaScript', 'Typescript', 'HTML', 'CSS', 'Lite Server'],
    image: taskify,
  },
  {
    id: 6,
    name: 'WebRTC Tech Talk',
    description: `I stepped out of my comfort zone at the Bractlet Tech Talk Series, where I presented on WebRTC protocols to 50 attendees. I covered key topics such as STUN/TURN servers for NAT traversal, signaling mechanisms, and WebSocket integration.`,
    technologies: [],
    image: webrtc,
  },
  {
    id: 7,
    name: 'ClippyNotes',
    description: `ClippyNotes is a Google Chrome extension designed to help you take and organize notes while browsing the web. When you're on a webpage, you can quickly jot down your thoughts, and it’ll automatically save the note with the URL, the date, and the time it was taken. This way, you'll always know exactly when and where you made your note, making it easy to come back to later! \n P.S. Microsoft Clippy is the theme and mascot, I’ve brought him back for your note-taking enjoyment!`,
    technologies: [
      'Google Chrome Extension',
      'JavaScript',
      'JSON',
      'HTML',
      'CSS',
    ],
    image: clippynotes,
  },
  {
    id: 8,
    name: 'JobHub',
    description: `JobHub is a web application designed to streamline the job search process by helping users track and manage their job applications and statuses. It helps users stay organized, proactive, and focused as they navigate their job search journey. You got this!`,
    technologies: [
      'OAuth',
      'JavaScript',
      'React',
      'Redux.js',
      'HTML',
      'SCSS',
      'PostgreSQL',
      'Webpack',
      'Node.js',
      'Express',
    ],
    image: jobhub,
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
                  <div className='project-description'>
                    {project.description.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  <p className='project-techs'>
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

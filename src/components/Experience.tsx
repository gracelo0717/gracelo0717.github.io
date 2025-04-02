import React from 'react';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className='job'>
        <h3>
          Software Engineer:
          <strong> DeClustor</strong>
        </h3>
        <p>
          <strong>Duration:</strong> May 2024 – Present
        </p>
        <ul>
          <li>
            Enhanced 5 cluster metrics and ensured high availability by
            integrating AWS ECR and CloudWatch for real-time data insights and
            automated alerts, optimizing resource management
          </li>
          <li>
            Developed over 10 reusable React components and applied Higher-Order
            Components (HOCs) to ensure code consistency, streamline
            development, and enhance scalability
          </li>
          <li>
            Employed Redux for centralized state management, leveraging the
            singleton design pattern to simplify state transitions, reduce
            debugging time, and ensure predictable state handling
          </li>
          <li>
            Boosted performance by incorporating React Hooks and React Router,
            optimizing rendering and routing processes for faster navigation and
            reduced network requests
          </li>
          <li>
            Engineered a responsive user interface with Material UI (MUI),
            maintaining design consistency across React components
          </li>
          <li>
            Architected SQLite3 database for robust, ACID-compliant data
            storage, ensuring data integrity and consistency
          </li>
          <li>
            Constructed Node.js/Express server to manage HTTP requests across
            multiple endpoints, utilizing the middleware design pattern to
            enhance code reusability and modularize backend requests for
            improved scalability
          </li>
          <li>
            Designed interactive visualizations with D3.js, featuring 5 line
            graphs and pie charts to display detailed performance metrics such
            as CPU, memory, and network usage
          </li>
          <li>
            Containerized applications with Docker and deployed to Docker Hub,
            ensuring consistent environments across development, testing, and
            production to minimize discrepancies
          </li>
          <li>
            Enhanced real-time communication by implementing WebSocket
            technology, reducing network overhead and accelerating data
            transmission
          </li>
          <li>
            Optimized load times by approximately 20% through Webpack
            configuration tweaks and hot module reloading
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

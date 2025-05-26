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
          <strong>Duration:</strong> 2024 – Present
        </p>
        <ul>
          <li>
            Optimize cluster metrics and ensure high availability by integrating
            AWS ECR and CloudWatch for real-time insights and automated alerts,
            optimizing resource management
          </li>
          <li>
            Employ Redux with Redux Thunk for centralized state management and
            handling asynchronous requests from multiple endpoints
          </li>
          <li>
            Boost performance with useState for local state management and React
            Router for optimized navigation
          </li>
          <li>
            Engineer a responsive UI with MUI components, including icons,
            themes, and color palette, ensuring design consistency
          </li>
          <li>
            Construct a Node.js/Express server to manage HTTP requests across
            multiple endpoints, using middleware to modularize logic, improve
            reusability, and enhance scalability
          </li>
          <li>
            Architect an SQLite3 database with optimized schema design and
            ACID-compliant transactions to ensure data integrity
          </li>
          <li>
            Design interactive visualizations with D3.js to display real-time
            performance metrics (CPU, memory, network usage) through dynamic
            line graphs and pie charts, enabling data-driven insights and
            performance monitoring
          </li>
          <li>
            Containerize applications with Docker and deploy to Docker Hub,
            ensuring consistent environments across development, testing, and
            production to streamline deployment and minimize environment
            discrepancies
          </li>
          <li>
            Enhance real-time communication with WebSockets for continuous
            updates and notifications, reducing network overhead
          </li>
          <li>
            Develop applications with Webpack, optimizing configuration for
            faster load times and hot module reloading
          </li>
          <li>
            Create a React-based front-end with reusable components and HOCs,
            enabling a scalable and maintainable UI architecture
          </li>
        </ul>
        <p>
          <strong>Technologies Used:</strong> Amazon ECS, Docker, React, Redux,
          Express.js, Node.js, Javascript, D3.js, Webpack, Material UI, HTML,
          CSS, Redis, Websocket, SQLite3
        </p>
      </div>
    </section>
  );
};

export default Experience;

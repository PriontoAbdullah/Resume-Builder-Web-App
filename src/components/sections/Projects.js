import React from 'react';

const Projects = ({ data, color }) => {
  const projects = data.projects;
  const projects_link = data.projects_link;
  return (
    <div className='projects'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        <span className='material-icons' style={{ color: `${color.primary}` }}>
          integration_instructions
        </span>
        Projects
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {projects.map((item, index) => (
        <ul key={index} className='row-table'>
          <li>
            <span className='title'>{item.title}</span>
            {item.link && (
              <span className='link'>
                <span className='fas fa-link' />
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: `${color.primary}` }}
                >
                  {item.link}
                </a>
              </span>
            )}
          </li>
          <p className='description'>{item.description}</p>
        </ul>
      ))}
      {projects_link.length > 0 && (
        <li className='repo_link'>
          More projects on:
          <span className='fas fa-link' />
          <a
            href={projects_link}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: `${color.primary}` }}
          >
            {projects_link}
          </a>
        </li>
      )}
    </div>
  );
};

export default Projects;

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Socials = () => {
  return (
    <div className='socials'>
      <a
        href='https://www.linkedin.com/in/gracelo0717/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#6a6a6a' }}
      >
        <LinkedInIcon fontSize='large' />
      </a>
      <a
        href='https://github.com/gracelo0717'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#6a6a6a' }}
      >
        <GitHubIcon fontSize='large' />
      </a>
      <a href='mailto:Lo.grace717@gmail.com' style={{ color: '#6a6a6a' }}>
        <EmailIcon fontSize='large' />
      </a>
    </div>
  );
};

export default Socials;

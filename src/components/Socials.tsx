import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const Socials = () => {
  return (
    <div className='socials'>
      <a
        href='https://www.linkedin.com/in/gracelo0717/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#5c5c5c' }}
      >
        <LinkedInIcon fontSize='large' />
      </a>
      <a
        href='https://github.com/gracelo0717'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: '#5c5c5c' }}
      >
        <GitHubIcon fontSize='large' />
      </a>
      <a href='mailto:Lo.grace717@gmail.com' style={{ color: '#5c5c5c' }}>
        <EmailIcon fontSize='large' />
      </a>
      <a
        href='https://docs.google.com/document/d/11ZD7eeLfxz-wEkZft38YBFTg8lsNYA-2cC5RHosQCso/edit?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#5c5c5c',
        }}
      >
        <DescriptionIcon fontSize='large' />
      </a>
    </div>
  );
};

export default Socials;

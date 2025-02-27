import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-item'>
        <Link to='/' className='navbar-link'>
          <HomeIcon fontSize='medium' />
        </Link>
        <span className='navbar-label'>Home</span>
      </div>

      <div className='navbar-item'>
        <Link to='/aboutme' className='navbar-link'>
          <PersonIcon fontSize='medium' />
        </Link>
        <span className='navbar-label'>About Me</span>
      </div>

      <div className='navbar-item'>
        <Link to='/experience' className='navbar-link'>
          <WorkIcon fontSize='medium' />
        </Link>
        <span className='navbar-label'>Experience</span>
      </div>

      <div className='navbar-item'>
        <Link to='/projects' className='navbar-link'>
          <CodeIcon fontSize='medium' />
        </Link>
        <span className='navbar-label'>Projects</span>
      </div>

      <div className='navbar-item'>
        <Link to='/contact' className='navbar-link'>
          <MailIcon fontSize='medium' />
        </Link>
        <span className='navbar-label'>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;

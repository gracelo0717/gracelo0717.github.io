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
      <Link to='/'>
        <HomeIcon fontSize='medium' />
      </Link>
      <Link to='/aboutme'>
        <PersonIcon fontSize='medium' />
      </Link>
      <Link to='/experience'>
        <WorkIcon fontSize='medium' />
      </Link>
      <Link to='/projects'>
        <CodeIcon fontSize='medium' />
      </Link>
      <Link to='/contact'>
        <MailIcon fontSize='medium' />
      </Link>
    </div>
  );
};

export default Navbar;

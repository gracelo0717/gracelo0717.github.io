import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>About</Link>
      <Link to='/experience'>Experience</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default Navbar;

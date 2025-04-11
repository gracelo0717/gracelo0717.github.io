import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className='footer'>
        <p>&copy; {year} Grace Lo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;

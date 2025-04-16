import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <footer>
        <h4>&copy; {year} Grace Lo. All rights reserved.</h4>
      </footer>
    </div>
  );
};

export default Footer;

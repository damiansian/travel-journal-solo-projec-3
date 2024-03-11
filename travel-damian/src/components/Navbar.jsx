// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div role="banner" className='navbar'>
      <div>
        <img src='../src/images/globe.svg' alt="globe" />
      </div>
      <div role="heading" aria-level="1" className='nav--text'>
        My travel journal
      </div>
    </div>
  );
};

export default Navbar;

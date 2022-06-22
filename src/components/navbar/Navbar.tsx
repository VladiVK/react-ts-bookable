import React from 'react';
import NavbarLinks from '../navbarLinks';
import UserPicker from '../userPicker';

const Navbar = () => {
  return (
    <nav>
      <div className='nav__center'>
        <NavbarLinks />
        <UserPicker />
      </div>
    </nav>
  );
};

export default Navbar;

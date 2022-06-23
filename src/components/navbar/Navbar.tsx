import React from 'react';
import NavbarLinks from '../navbarLinks';
import UserPicker from '../userPicker';
import { NavbarWrapper } from './style';
const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <div className='nav__center'>
          <NavbarLinks />
          <UserPicker />
        </div>
      </NavbarWrapper>
      <hr />
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
// Components
import NavbarLinks from '../navbarLinks';
import UserPicker from '../userPicker';
// Icons
import Logo from '../../assets/icons/main-logo.svg';
import { FaBars } from 'react-icons/fa';
// Styles
import { NavbarWrapper } from './style';

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <div className='nav__center'>
          <Link to='/'>
            <img className='nav__logo' src={Logo} alt='bookable logotype' />
          </Link>
          <button className='nav__toggle'>
            <FaBars />
          </button>
          <NavbarLinks />
          <UserPicker />
        </div>
      </NavbarWrapper>
      <hr />
    </>
  );
};

export default Navbar;

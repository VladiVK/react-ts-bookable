import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import NavbarLinks from '../navbarLinks';
import UserPicker from '../userPicker';
// Icons
import Logo from '../../assets/icons/main-logo.svg';
import { FaBars } from 'react-icons/fa';
// Styles
import { NavbarWrapper } from './style';
import { useAppDispatch } from '../../hooks/hooks';
import { openSidebar } from '../../store/navigationSlice/navigation_slice';

import { fetchBookables } from '../../store/bookablesSlice/bookables_slice';

const Navbar = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchBookables());
  // }, []);

  return (
    <>
      <NavbarWrapper>
        <div className='nav__center'>
          <Link to='/'>
            <img className='nav__logo' src={Logo} alt='bookable logotype' />
          </Link>
          <button
            className='nav__toggle'
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
          <NavbarLinks />
          <div className='nav__users'>
            <UserPicker />
          </div>
        </div>
      </NavbarWrapper>
      <hr />
    </>
  );
};

export default Navbar;

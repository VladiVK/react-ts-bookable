import React from 'react';
import { FaTimes } from 'react-icons/fa';
import UserPicker from '../userPicker';
import { SidebarWrapper } from './style';
import Logo from '../../assets/icons/main-logo.svg';
import { links } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { closeSidebar } from '../../store/navigationSlice/navigation_slice';

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return (
    <SidebarWrapper>
      <aside className={`sidebar ${isSidebarOpen && 'sidebar-show'}`}>
        <header className='sidebar__header'>
          <img src={Logo} alt='bookable logo' className='sidebar__logo' />
          <button
            type='button'
            className='sidebar__btn-close'
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </header>
        <ul className='sidebar__links'>
          {links.map(({ id, icon, title, url }) => (
            <li key={id} className='sidebar__link'>
              <NavLink to={url} onClick={() => dispatch(closeSidebar())}>
                {icon}
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='sidebar__users'>
          <UserPicker />
        </div>
      </aside>
    </SidebarWrapper>
  );
};

export default Sidebar;

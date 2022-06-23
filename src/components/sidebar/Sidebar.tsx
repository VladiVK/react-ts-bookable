import React from 'react';
import { FaTimes } from 'react-icons/fa';
import UserPicker from '../userPicker';
import { SidebarWrapper } from './style';
import Logo from '../../assets/icons/main-logo.svg';
import { links } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <aside className='sidebar'>
        <header className='sidebar__header'>
          <img src={Logo} alt='bookable logo' className='sidebar__logo' />
          <button type='button' className='sidebar__btn-close'>
            <FaTimes />
          </button>
        </header>
        <ul className='sidebar__links'>
          {links.map(({ id, icon, title, url }) => (
            <li key={id} className='sidebar__link'>
              <NavLink to={url}>
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

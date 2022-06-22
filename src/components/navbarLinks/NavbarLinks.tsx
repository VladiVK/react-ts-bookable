import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/constants';

const NavbarLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.url}>
              {link.icon}
              <span>{link.title}</span>
            </NavLink>
          </li>
        );
      })}
      ;
    </>
  );
};

export default NavbarLinks;

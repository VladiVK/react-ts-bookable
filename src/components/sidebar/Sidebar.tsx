import React from 'react';
import UserPicker from '../userPicker';
import { SidebarWrapper } from './style';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <aside className='sidebar sidebar-show'>
        <header className='sidebar__header'></header>
        <ul className='sidebar__links'></ul>
        <UserPicker />
      </aside>
    </SidebarWrapper>
  );
};

export default Sidebar;

import React from 'react';
import { UserDetails, UsersList } from '../../components';
import { UsersPageWrapper } from './style';

const UsersPage = () => {
  return (
    <UsersPageWrapper className='container-center page-100-vh'>
      <div className='page-content'>
        <UsersList />
        <UserDetails />
      </div>
    </UsersPageWrapper>
  );
};

export default UsersPage;

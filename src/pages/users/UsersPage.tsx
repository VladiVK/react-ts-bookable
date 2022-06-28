import React from 'react';
import { UserDetail, UsersList } from '../../components';
import { UsersPageWrapper } from './style';

const UsersPage = () => {
  return (
    <UsersPageWrapper className='container-center page-100-vh'>
      <div className='page-content'>
        <UsersList />
        <UserDetail />
      </div>
    </UsersPageWrapper>
  );
};

export default UsersPage;

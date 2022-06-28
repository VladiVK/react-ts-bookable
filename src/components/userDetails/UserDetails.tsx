import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { UserDetailsWrapper } from './style';

const UserDetails = () => {
  const { selectedUser } = useAppSelector((state) => state.users);
  const { name, title, notes } = selectedUser;
  return (
    <UserDetailsWrapper>
      <h2 className='details__header'>{name}</h2>
      <div className='details__content'>
        <h4 className='details__title'>{title}</h4>
        <p className='details__notes'>{notes}</p>
      </div>
    </UserDetailsWrapper>
  );
};

export default UserDetails;

import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { UserUI, fetchUsers } from '../../store/usersSlice/users_slice';
import Loader from '../loader';
import { UserPickerWrapper } from './style';

const UserPicker = () => {
  const { users, isLoading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Loader size='small' />;
  }

  return (
    <UserPickerWrapper>
      <select className='picker'>
        {users.map((user) => (
          <option value='' key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </UserPickerWrapper>
  );
};

export default UserPicker;

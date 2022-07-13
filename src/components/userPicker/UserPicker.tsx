import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  UserUI,
  fetchUsers,
  setUser,
} from '../../store/usersSlice/users_slice';
import Loader from '../loader';
import { UserPickerWrapper } from './style';

const UserPicker = () => {
  const { users, isLoading, error, selectedUser } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader size='small' />;
  }

  return (
    <UserPickerWrapper>
      <select
        className='picker'
        value={selectedUser.id}
        onChange={(e) => dispatch(setUser(parseInt(e.target.value, 10)))}
      >
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </UserPickerWrapper>
  );
};

export default UserPicker;

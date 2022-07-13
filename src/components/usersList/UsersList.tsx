import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setUser, setUsersID } from '../../store/usersSlice/users_slice';
import { UsersListWrapper } from './style';

import Loader from '../loader';

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, selectedUser, usersID, isLoading } = useAppSelector(
    (state) => state.users
  );

  if (isLoading) {
    return <Loader size='medium' />;
  }
  return (
    <UsersListWrapper>
      <ul className='users__list'>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <li
              key={id}
              className={` ${
                id === usersID
                  ? 'users__list-item selected'
                  : 'users__list-item'
              }`}
            >
              <button
                className='btn users__list-item--btn'
                type='button'
                onClick={() => {
                  dispatch(setUser(id));
                  dispatch(setUsersID(id));
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </UsersListWrapper>
  );
};

export default UsersList;

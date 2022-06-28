import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setUser,
  setUsers,
  setUsersID,
} from '../../store/usersSlice/users_slice';
import { UsersListWrapper } from './style';
import { users as fetchedUsers } from '../../utils/static.json';

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, selectedUser, usersID } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(setUsers(fetchedUsers));
  }, []);

  //   useEffect(() => {
  //     dispatch(setUser(usersID));
  //   }, [usersID]);

  if (users.length < 1) {
    return <h1>Loading...</h1>;
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

import { createSlice } from '@reduxjs/toolkit';

type UserUI = {
  id: number;
  name: string;
  img: string;
  title: string;
  notes: string;
};

type UsersState = {
  users: UserUI[];
  selectedUser: UserUI;
  usersID: number;
};

const initialState: UsersState = {
  users: [],
  selectedUser: {} as UserUI,
  usersID: 1,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setUser: (state, { payload }) => {
      let newUser = state.users.find((user) => user.id === payload);
      if (!newUser) newUser = state.users[0];
      state.selectedUser = newUser;
    },
    setUsersID: (state, { payload }) => {
      state.usersID = payload;
    },
  },
});

export const { setUsers, setUser, setUsersID } = usersSlice.actions;
export default usersSlice.reducer;

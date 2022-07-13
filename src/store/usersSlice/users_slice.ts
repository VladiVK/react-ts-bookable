import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserUI = {
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
  isLoading: boolean;
  error: null | string;
};

// users  initially load in navbar : <UserPicker> component
const initialState: UsersState = {
  users: [] as UserUI[],
  selectedUser: {} as UserUI,
  usersID: 1,
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      // watch users in:  json-server --watch db.json --port 3001
      const response = await fetch('http://localhost:3001/users');

      if (!response.ok) {
        throw new Error('Server error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
      state.usersID = payload;
    },
    setUsersID: (state, { payload }) => {
      state.usersID = payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserUI[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      // test
      state.selectedUser = state.users[0];
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setUsers, setUser, setUsersID } = usersSlice.actions;
export default usersSlice.reducer;

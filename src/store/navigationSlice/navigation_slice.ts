import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { closeSidebar, openSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;
